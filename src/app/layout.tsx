import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ptBR } from '@clerk/localizations'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Devstore',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="pt-BR" className={inter.variable}>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
