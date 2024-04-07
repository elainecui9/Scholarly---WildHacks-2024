import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
 
export async function middleware(request: NextRequest) {
    if (!request.cookies.get('auth-token')) {
     //TODO trigger alert component ('you must be signed in to view that resource') or smth like that
     return NextResponse.redirect(new URL('/signin', request.url))
    }
    //TODO if base path & logged in redirect to /frontpage
}

export const config = {
    matcher: ['/frontpage', '/journalpage', '/journals', '/userclassroom', '/userdashboard', '/userprofile']
}