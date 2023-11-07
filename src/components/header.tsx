import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

export function Header() {
  return (
    <header className="bg-zinc-950 flex items-center justify-between pt-8 px-10 pb-5">
      <h1 className="font-extrabold text-2xl text-white">devstore</h1>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <button className="text-white py-1 space-x-2">Entrar</button>
        </SignInButton>
      </SignedOut>
    </header>
  )
}
