import Link from 'next/link'
import { Cart } from './cart'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { SearchInput } from './search-input'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

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
          <UserButton afterSignOutUrl="/" />
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
