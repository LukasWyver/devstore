import data from './data.json'
import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const { userId } = auth()

  if (!userId) {
    return new Response('Unauthorized', { status: 401 })
  }

  // return Response.json(data.products)
  return NextResponse.json(data.products)
}
