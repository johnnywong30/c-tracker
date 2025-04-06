import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { auth0 } from "@/lib/auth0";

const PUBLIC_PATHS = ["/"];

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const authRes = await auth0.middleware(request);

  const session = await auth0.getSession(request);

  if (PUBLIC_PATHS.includes(pathname)) {
    if (session && pathname === "/") {
      return NextResponse.redirect(
        new URL("/dashboard", request.nextUrl.origin)
      );
    }

    return NextResponse.next();
  }

  if (pathname.startsWith("/auth")) {
    return authRes;
  }

  if (!session) {
    // user is not authenticated, redirect to login page
    return NextResponse.redirect(
      new URL("/auth/login", request.nextUrl.origin)
    );
  }

  // the headers from the auth middleware should always be returned
  return authRes;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
