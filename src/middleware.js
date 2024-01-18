import { NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

export function middleware(request) {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path === "/auth/login" ||
    path === '/auth/register"' ||
    path === "/lp" ||
    path === "/hotel/booking";

  const token = request.cookies.get("token")?.value || "";

  if (token) {
    const decodedToken = jwtDecode(token);
    console.log("Decoded Token:", decodedToken);
  }

  // if (isPublicPath && token) {
  //   return NextResponse.redirect(new URL("/hotel/booking", request.nextUrl));
  // }

  // if (isPublicPath && token) {
  //   return NextResponse.redirect(new URL("/hotel/booking", request.nextUrl));
  // }

  if (!isPublicPath && !token) {
    console.log("nahe jauga !");
    return NextResponse.redirect(new URL("/auth/login", request.nextUrl));
  }
}

export const config = {
  matcher: ["/profile", "/auth/login", "/verifyemail", "/customers"],
};
