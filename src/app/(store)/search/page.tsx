import React from 'react'
import CardProductItem from '@/components/card-product-item'

export default function Search() {
  return (
    <div className="grid max-h-[min(100vh,860px)] grid-cols-9 grid-rows-6 gap-6">
      <CardProductItem
        imageUrl="/moletom-never-stop-learning.png"
        title="Moleton Never Stop Learning"
        price={129}
      />
      <CardProductItem
        imageUrl="/moletom-never-stop-learning.png"
        title="Moleton Never Stop Learning"
        price={129}
      />
      <CardProductItem
        imageUrl="/moletom-never-stop-learning.png"
        title="Moleton Never Stop Learning"
        price={129}
      />
    </div>
  )
}
