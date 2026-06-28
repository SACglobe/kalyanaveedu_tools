import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    // Use x-forwarded-host for Vercel proxy reliability, fallback to host header
    const host = request.headers.get('x-forwarded-host') || request.headers.get('host') || '';

    // Enforce www and https (skip for localhost/dev)
    const isLocalhost = host.includes('localhost') || host.includes('127.0.0.1');
    
    if (!isLocalhost && !host.startsWith('www.')) {
        url.hostname = `www.${host}`;
        url.protocol = 'https';
        // 308 is permanent redirect, better for SEO than 307 (Temporary)
        return NextResponse.redirect(url, 308);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
