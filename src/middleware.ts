
/* 
Good to know:
NextRequest is a type that represents incoming HTTP requests in Next.js Middleware, 
whereas NextResponse is a class used to manipulate and send back HTTP responses.

https://nextjs.org/docs/app/api-reference/file-conventions/middleware
*/

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