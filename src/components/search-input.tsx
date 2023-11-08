import { SearchIcon } from 'lucide-react'
import { Input } from './ui/input'

export function SearchInput() {
  return (
    <form className="relative flex w-[320px] items-center">
      <SearchIcon className="absolute left-5 h-5 w-5 stroke-zinc-500" />
      <Input
        type="search"
        placeholder="Buscar produtos..."
        className="h-11 flex-1 rounded-full border-zinc-900 bg-zinc-900 py-3.5 pl-14 pr-5 text-sm outline-none ring-zinc-700 placeholder:text-zinc-500"
      />
    </form>
  )
}
