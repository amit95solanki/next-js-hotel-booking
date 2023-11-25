import { NextResponse } from "next/server";
// import jwtDecode from "jwt-decode";
export function middleware(request) {
  // const token = "asdfghjhgrr3r33";
  // const path = request.nextUrl.pathname;
  // console.log("middleware executed", path, token);

  // const loginuser = path === "/auth/login" || path === "/auth/register" || path === "/verifyemail";
  // if (loginuser) {
  //   if (token) {
  //     console.log(path, "token");
  //     return NextResponse.redirect(new URL("/customers", request.url));
  //   } else {
  //     if (!token) {
  //       return NextResponse.redirect(new URL("/auth/login", request.url));
  //     }
  //   }
  // }

  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/auth/login" || path === '/auth/register"' || path === "/lp";

  const token = request.cookies.get("token")?.value || "";
  console.log("token", token);
  // const decodedToken = jwtDecode(token);
  // console.log("decodedToken", decodedToken);
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    console.log("nahe jauga !");
    return NextResponse.redirect(new URL("/auth/login", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/lp", "/profile", "/auth/login", "/auth/register", "/verifyemail", "/customers"],
};
