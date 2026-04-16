import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("admin_session")?.value;
  if (!session || session !== process.env.ADMIN_SECRET) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
