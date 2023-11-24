import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  console.log("middleware executed", path);

  const token = false;

  const loginuser = path === "/auth/login" || path === "/auth/register" || path === "/verifyemail";
  if (loginuser) {
    if (token) {
      console.log(path, "token");
      return NextResponse.redirect(new URL("/", request.url));
    } else {
      if (!token) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
      }
    }
  }

  // const path = request.nextUrl.pathname;

  // const isPublicPath = path === "/login" || path === "/signup" || path === "/verifyemail";
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/lp", "/profile", "/login", "/register", "/verifyemail", "/customers"],
};
