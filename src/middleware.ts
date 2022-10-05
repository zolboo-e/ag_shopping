import { NextMiddleware, NextResponse } from "next/server";

const authRoutes: string[] = ["/auth/login", "/auth/register"];
const protectedRoutes: string[] = [];
export const middleware: NextMiddleware = (request) => {
  const { pathname } = request.nextUrl;
  const refreshToken = request.cookies.get("refresh_token");

  if (!refreshToken && protectedRoutes.includes(pathname)) {
    const url = request.nextUrl.clone();
    url.search = `?redirect_to=${url.pathname}`;
    url.pathname = "/auth/login";

    return NextResponse.redirect(url);
  }
  if (refreshToken && authRoutes.includes(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/";

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!api|static|_next|assets|favicon.ico).*)"],
};
