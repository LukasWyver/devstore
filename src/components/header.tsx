import Link from 'next/link'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Separator } from './ui/separator'
import { Search, ShoppingBagIcon } from 'lucide-react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <form className="relative flex w-[320px] items-center">
          <Search className="absolute left-5 h-5 w-5 stroke-zinc-500" />
          <Input
            type="search"
            placeholder="Buscar produtos..."
            className="h-11 flex-1 rounded-full border-zinc-900 bg-zinc-900 py-3.5 pl-14 pr-5 text-sm outline-none ring-zinc-700 placeholder:text-zinc-500"
          />
        </form>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="gap-2">
            <ShoppingBagIcon className="h-4 w-4" />
            <span className="text-sm">Cart (3)</span>
          </Button>
        </div>

        <Separator orientation="vertical" className="h-4" />

        <div className="flex items-center gap-2">
          <SignedIn>
            <span className="text-sm">Account</span>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        <div className="flex items-center gap-2">
          <SignedOut>
            <SignInButton>
              <Button variant="secondary">Entrar</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}
