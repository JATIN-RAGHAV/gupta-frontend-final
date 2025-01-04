import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define a matcher for private routes (only `/checkout` and `/payment` are private)
const isPrivateRoute = createRouteMatcher(['/checkout(.*)', '/payment(.*)']);

export default clerkMiddleware(async (auth, request) => {
    if (isPrivateRoute(request)) {
        await auth.protect(); // Protect private routes
    }
});

export const config = {
    matcher: [
        // Match all routes except Next.js internals and static files
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};
