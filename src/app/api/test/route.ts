import { NextResponse } from 'next/server';

export async function GET(request: any, params: any) {
  const url = request.url;

  return NextResponse.json(url);
}
