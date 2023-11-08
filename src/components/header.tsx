import Link from 'next/link'
import { Cart } from './cart'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { SearchInput } from './search-input'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  ClerkLoading,
  ClerkLoaded,
} from '@clerk/nextjs'
import { Skeleton } from './ui/skeleton'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <SearchInput />
      </div>

      <div className="flex items-center gap-4">
        <Cart />

        <Separator orientation="vertical" className="h-4" />

        <SignedIn>
          <span className="text-sm">Minha Conta</span>

          <ClerkLoading>
            <Skeleton className="h-8 w-8 rounded-full bg-zinc-900" />
          </ClerkLoading>
          <ClerkLoaded>
            <UserButton afterSignOutUrl="/" />
          </ClerkLoaded>
        </SignedIn>

        <SignedOut>
          <SignInButton>
            <Button variant="secondary">Entrar</Button>
          </SignInButton>
        </SignedOut>
      </div>
    </header>
  )
}
