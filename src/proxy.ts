import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "@/lib/auth";

export function proxy(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const protectedPaths = ["/dashboard"];

  if (protectedPaths.some((path) => req.nextUrl.pathname.startsWith(path))) {
    if (!token) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }

    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
