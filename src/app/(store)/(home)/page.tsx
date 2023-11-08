import { api } from '@/data/api'
import { Product } from '@/data/types/product'

import { ProductCart } from '@/components/product-card'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
    // next: { revalidate: 60 * 60 }, // 1 hour
    cache: 'no-store',
  })
  const products = await response.json()

  return products
}

export default async function HomePage() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="grid max-h-[min(100vh,856px)] grid-cols-9 grid-rows-6 gap-6">
      <ProductCart
        slug={`/product/${highlightedProduct.slug}`}
        image={highlightedProduct.image}
        title={highlightedProduct.title}
        price={highlightedProduct.price}
      />

      {otherProducts.map((product) => {
        return (
          <ProductCart
            key={product.id}
            slug={`/product/${product.slug}`}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        )
      })}
    </div>
  )
}
