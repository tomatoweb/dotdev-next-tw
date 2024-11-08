import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Clone the request headers so that we don't modify the original headers object
  const requestHeaders = new Headers(request.headers);

  // Return a new request object with the updated headers using NextResponse.next()
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}