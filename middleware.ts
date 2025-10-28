import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the auth cookie
  const authCookie = request.cookies.get('auth_user')?.value;
  
  // Define protected routes
  const protectedRoutes = ['/vault'];
  const isProtectedRoute = protectedRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  );
  
  // If accessing a protected route without auth cookie, redirect to login
  if (isProtectedRoute && authCookie !== 'true') {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  // If accessing login page with valid auth cookie, redirect to vault
  if (request.nextUrl.pathname === '/login' && authCookie === 'true') {
    return NextResponse.redirect(new URL('/vault', request.url));
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
