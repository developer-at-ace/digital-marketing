import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { leadSchema } from "@/lib/validation";
import Lead from "@/models/Lead";

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 12_000) {
    return NextResponse.json({ error: "This enquiry is too large to submit." }, { status: 413 });
  }

  const parsed = leadSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Please review the form and try again." }, { status: 400 });
  }

  try {
    await connectToDatabase();
    await Lead.create(parsed.data);
    return NextResponse.json({ received: true }, { status: 201 });
  } catch (error) {
    console.error("Lead submission could not be stored:", error instanceof Error ? error.name : "Unknown error");
    return NextResponse.json(
      { error: "We couldn’t send your enquiry right now. Please try again later." },
      { status: 503 },
    );
  }
}
