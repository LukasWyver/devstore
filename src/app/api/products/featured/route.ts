import data from '../data.json'
import { auth } from '@clerk/nextjs'

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const { userId } = auth()

  if (!userId) {
    return new Response('Unauthorized', { status: 401 })
  }

  const featuredProducts = data.products.filter((product) => product.featured)

  return Response.json(featuredProducts)
}
