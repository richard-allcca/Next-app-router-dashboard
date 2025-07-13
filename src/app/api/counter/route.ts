import { NextResponse } from "next/server";

export const GET = (request: Request) => {

  console.log({ method: request.method})

  return NextResponse.json({
    message: "Hello from the API route",
    method: request.method,
    url: request.url,
    headers: Object.fromEntries(request.headers.entries()),
    count: 100, // Example count value
  })
}