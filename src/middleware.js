import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("middleware executed");

  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/login" || path === "/signup" || path === "/verifyemail";
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/profile", "/login", "/register", "/verifyemail"],
};
