import { NextResponse } from "next/server";
import { z } from "zod";
import { ADMIN_COOKIE, adminAuthConfigured, createAdminSession, credentialsMatch } from "@/lib/auth";

const credentialsSchema = z.object({
  username: z.string().min(1).max(200),
  password: z.string().min(1).max(200),
});

export async function POST(request: Request) {
  if (!adminAuthConfigured()) {
    return NextResponse.json({ error: "Admin access is not configured on this server." }, { status: 503 });
  }

  const input = credentialsSchema.safeParse(await request.json().catch(() => null));
  if (!input.success || !credentialsMatch(input.data.username, input.data.password)) {
    return NextResponse.json({ error: "The username or password is incorrect." }, { status: 401 });
  }

  try {
    const session = createAdminSession();
    const response = NextResponse.json({ authenticated: true });
    response.cookies.set(ADMIN_COOKIE, session.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      expires: new Date(session.expires * 1000),
    });
    return response;
  } catch (error) {
    console.error("Admin session could not be created:", error);
    return NextResponse.json({ error: "Admin access is not configured correctly." }, { status: 503 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ signedOut: true });
  response.cookies.set(ADMIN_COOKIE, "", { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/", maxAge: 0 });
  return response;
}
