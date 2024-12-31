import { NextResponse } from "next/server";

export function middleware(req) {
    const token = req.cookies.get("token");

    if (!token) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}

// Apply middleware to specific routes
export const config = {
    matcher: ["/checkout", "/profile"],
};