import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define protected routes
const protectedRoutes = ["/dashboard", "/profile", "/settings"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("firebaseToken")?.value;

  // Check if the path is a protected route and if there's no token
  if (protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))) {
    if (!token) {
      const loginUrl = new URL("/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

// Apply middleware to protected routes
export const config = {
  matcher: protectedRoutes,
};
