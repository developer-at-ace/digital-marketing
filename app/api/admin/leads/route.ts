import { NextResponse } from "next/server";
import { adminAuthConfigured, hasAdminSession } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { leadUpdateSchema } from "@/lib/validation";
import Lead from "@/models/Lead";

export async function GET() {
  if (!adminAuthConfigured()) {
    return NextResponse.json({ error: "Admin access is not configured on this server." }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
  if (!(await hasAdminSession())) {
    return NextResponse.json({ error: "Sign in to view enquiries." }, { status: 401, headers: { "Cache-Control": "no-store" } });
  }

  try {
    await connectToDatabase();
    const leads = await Lead.find().sort({ createdAt: -1 }).limit(200).lean();
    return NextResponse.json({ leads }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("Lead inbox could not be loaded:", error instanceof Error ? error.name : "Unknown error");
    return NextResponse.json({ error: "The lead inbox is currently unavailable." }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}

export async function PATCH(request: Request) {
  if (!adminAuthConfigured()) {
    return NextResponse.json({ error: "Admin access is not configured on this server." }, { status: 503 });
  }
  if (!(await hasAdminSession())) {
    return NextResponse.json({ error: "Sign in to update enquiries." }, { status: 401 });
  }

  const input = leadUpdateSchema.safeParse(await request.json().catch(() => null));
  if (!input.success) {
    return NextResponse.json({ error: "The lead update is invalid." }, { status: 400 });
  }

  try {
    await connectToDatabase();
    const { id, ...updates } = input.data;
    const lead = await Lead.findByIdAndUpdate(id, updates, { new: true, runValidators: true }).lean();
    if (!lead) return NextResponse.json({ error: "This enquiry could not be found." }, { status: 404 });
    return NextResponse.json({ lead });
  } catch (error) {
    console.error("Lead could not be updated:", error instanceof Error ? error.name : "Unknown error");
    return NextResponse.json({ error: "The enquiry could not be updated." }, { status: 503 });
  }
}
