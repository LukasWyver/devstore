import './globals.css'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { ptBR } from '@clerk/localizations'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter as FontSans } from 'next/font/google'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Devstore',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      localization={ptBR}
      appearance={{
        elements: { formButtonPrimary: 'bg-violet-600 hover:bg-violet-700' },
      }}
    >
      <html
        lang="pt-BR"
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
        suppressHydrationWarning
      >
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
