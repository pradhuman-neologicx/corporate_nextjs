import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import Schema from '@/components/Schema'
import { baseMetadata } from '@/lib/seo'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import './globals.css'

const inter = Inter({ variable: '--font-sans', subsets: ['latin'] })
const robotoMono = Roboto_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  ...baseMetadata,
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${inter.variable} ${robotoMono.variable}`}>
      <head>
        <Schema />
      </head>
      <body className="font-sans antialiased text-foreground">
        {children}
        <ScrollToTopButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
