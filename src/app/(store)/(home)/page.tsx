import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  return (
    <div className="grid max-h-[min(100vh,860px)] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group relative col-span-3 row-span-3 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900 first:col-span-6 first:row-span-6"
      >
        <Image
          src="/moletom-never-stop-learning.png"
          className="transition-transform duration-500 group-hover:scale-105"
          width={920}
          height={920}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-10 right-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5 backdrop-blur-sm group-first:bottom-28 group-first:right-28">
          <span className="truncate text-sm">Moleton Never Stop Learning</span>
          <span className="flex h-full items-center justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-violet-500 to-violet-600 px-4 py-3 font-semibold">
            R$ 129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900 first:col-span-6 first:row-span-6"
      >
        <Image
          src="/moletom-java.png"
          className="transition-transform duration-500 group-hover:scale-105"
          width={920}
          height={920}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-10 right-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5 backdrop-blur-sm group-first:bottom-28 group-first:right-28">
          <span className="truncate text-sm">Moleton Never Stop Learning</span>
          <span className="flex h-full items-center justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-violet-500 to-violet-600 px-4 py-3 font-semibold">
            R$ 129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900 first:col-span-6 first:row-span-6"
      >
        <Image
          src="/moletom-ia-p-devs.png"
          className="transition-transform duration-500 group-hover:scale-105"
          width={920}
          height={920}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-10 right-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5 backdrop-blur-sm group-first:bottom-28 group-first:right-28">
          <span className="truncate text-sm">Moleton Never Stop Learning</span>
          <span className="flex h-full items-center justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-violet-500 to-violet-600 px-4 py-3 font-semibold">
            R$ 129
          </span>
        </div>
      </Link>
    </div>
  )
}
