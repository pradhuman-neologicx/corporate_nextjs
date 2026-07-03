import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // Try to get country from Vercel's req.geo, fallback to Cloudflare/other headers if available
  let country = req.geo?.country;

  if (!country) {
    // If you are using Cloudflare, you can use:
    // country = req.headers.get('cf-ipcountry');
    
    // If not using any Edge provider that gives country, we default to US
    country = 'US';
  }

  // Create a new response to allow the request to proceed
  const response = NextResponse.next();

  // Set the custom header so that your Laravel backend can read it using $request->header('X-Country-Code')
  response.headers.set('X-Country-Code', country);

  // You can also set a cookie so your React components can read it if needed
  response.cookies.set('user_country', country, { path: '/', maxAge: 86400 * 30 }); // 30 days

  return response;
}

// Ensure this middleware runs on all routes except static files and Next.js internals
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
