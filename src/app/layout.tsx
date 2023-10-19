import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import Providers from '../components/Providers'
import Appbar from '../components/Appbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Login with google',
  description: '',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body className="bg-zinc-700 text-white">
        <Providers>
          <Appbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
