import Link from 'next/link'
import Image from 'next/image'

interface ProductCartProps {
  slug: string
  image: string
  title: string
  price: number
}

export function ProductCart({ slug, image, title, price }: ProductCartProps) {
  return (
    <Link
      href={slug}
      className="group relative col-span-3 row-span-3 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900 first:col-span-6 first:row-span-6"
    >
      <Image
        alt=""
        src={image}
        width={920}
        height={920}
        quality={100}
        className="transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute bottom-10 right-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/80 p-1 pl-5 backdrop-blur-sm group-first:bottom-28 group-first:right-28">
        <span className="truncate text-sm">{title}</span>
        <span className="flex h-full items-center justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-violet-400 to-violet-600 px-4 py-3 font-semibold">
          {price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </span>
      </div>
    </Link>
  )
}
