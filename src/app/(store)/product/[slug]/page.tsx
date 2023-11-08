import { Button } from '@/components/ui/button'
import { Toggle } from '@/components/ui/toggle'
import { ChevronLeftIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductPage() {
  return (
    <div className="relative grid max-h-[min(100vh,816px)] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          alt=""
          width={1000}
          height={1000}
          quality={100}
          src="/moletom-never-stop-learning.png"
          className=""
        />
      </div>

      <div className="flex flex-col justify-center p-12">
        <Button variant="secondary" size="icon">
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <h1 className="mt-8 text-3xl font-bold leading-tight">
          Moletom Never Stop Learning
        </h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          Moletom fabricado com 88% de algodão e 12% de poliéster.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block whitespace-nowrap rounded-full bg-gradient-to-r from-violet-400 to-violet-600 px-5 py-2.5 font-semibold">
            R$ 129
          </span>
          <span className="text-sm text-zinc-400 ">
            Em 12x s/ Juros de R$ 10,75
          </span>
        </div>

        <div className="my-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>

          <div className="flex gap-2">
            <Toggle variant="outline">P</Toggle>
            <Toggle variant="outline">M</Toggle>
            <Toggle variant="outline">G</Toggle>
            <Toggle variant="outline">GG</Toggle>
          </div>
        </div>

        <Button
          size="lg"
          className="rounded-full bg-emerald-500 font-semibold hover:bg-emerald-400"
        >
          Adicionar ao carrinho
        </Button>
      </div>
    </div>
  )
}
