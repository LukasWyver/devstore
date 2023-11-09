import { z } from 'zod'
import data from '../data.json'
import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } },
) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const { userId } = auth()

  if (!userId) {
    return new Response('Unauthorized', { status: 401 })
  }

  const slug = z.string().parse(params.slug)
  const product = data.products.find((product) => product.slug === slug)

  if (!product) {
    return new Response('Product not found.', { status: 400 })
  }

  // return Response.json(product)
  return NextResponse.json(product)
}
