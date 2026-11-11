import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "suamglobaldigital_admin";
const SESSION_SECONDS = 60 * 60 * 8;

export function adminAuthConfigured() {
  return Boolean(
    process.env.ADMIN_USERNAME
      && process.env.ADMIN_PASSWORD
      && process.env.AUTH_SECRET
      && process.env.AUTH_SECRET.length >= 32,
  );
}

function getSecret() {
  const secret = process.env.AUTH_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("AUTH_SECRET must contain at least 32 characters.");
  }
  return secret;
}

function sign(value: string) {
  return createHmac("sha256", getSecret()).update(value).digest("base64url");
}

export function createAdminSession() {
  const expires = Math.floor(Date.now() / 1000) + SESSION_SECONDS;
  const payload = String(expires);
  return { token: `${payload}.${sign(payload)}`, expires };
}

export function isAdminSessionValid(token: string | undefined) {
  if (!token) return false;
  const [expires, signature, extra] = token.split(".");
  if (!expires || !signature || extra || Number(expires) <= Date.now() / 1000) return false;

  const expected = Buffer.from(sign(expires));
  const supplied = Buffer.from(signature);
  return expected.length === supplied.length && timingSafeEqual(expected, supplied);
}

export async function hasAdminSession() {
  const jar = await cookies();
  return isAdminSessionValid(jar.get(ADMIN_COOKIE)?.value);
}

export function credentialsMatch(username: string, password: string) {
  const expectedUsername = process.env.ADMIN_USERNAME;
  const expectedPassword = process.env.ADMIN_PASSWORD;
  if (!expectedUsername || !expectedPassword) return false;

  const matches = (actual: string, expected: string) => {
    const actualDigest = createHmac("sha256", "credential-check").update(actual).digest();
    const expectedDigest = createHmac("sha256", "credential-check").update(expected).digest();
    return timingSafeEqual(actualDigest, expectedDigest);
  };
  return matches(username, expectedUsername) && matches(password, expectedPassword);
}
