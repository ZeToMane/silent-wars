import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Only redirect root
  if (pathname !== "/") return;

  // Get browser language
  const lang = request.headers.get("accept-language")?.split(",")[0] || "en";

  // Check if it starts with 'fr'
  const locale = lang.startsWith("fr") ? "fr" : "en";

  // Redirect to /fr or /en
  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}
