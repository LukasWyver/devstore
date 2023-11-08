import { Skeleton } from '@/components/ui/skeleton'

export default function HomeLoading() {
  return (
    <div className="grid h-[min(100vh,856px)] grid-cols-9 grid-rows-6 gap-6">
      <Skeleton className="col-span-6 row-span-6 h-full w-full rounded-lg" />
      <Skeleton className="col-span-3 row-span-3 h-full w-full rounded-lg" />
      <Skeleton className="col-span-3 row-span-3 h-full w-full rounded-lg" />
    </div>
  )
}
