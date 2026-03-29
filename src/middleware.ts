import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    const hostname = request.headers.get('host') || '';

    // Enforce www and https (skip for localhost/dev)
    const isLocalhost = hostname.includes('localhost') || hostname.includes('127.0.0.1');
    if (!isLocalhost && !hostname.startsWith('www.')) {
        const newHostname = `www.${hostname}`;
        url.hostname = newHostname;
        url.protocol = 'https';
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
