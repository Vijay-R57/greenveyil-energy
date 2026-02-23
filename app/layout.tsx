import type { Metadata, Viewport } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600', '700'],
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-dm-serif',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Greenveyil | Solar EPC Company in India',
  description:
    'Greenveyil Pvt Ltd is a leading Indian solar EPC company delivering rooftop, commercial, and industrial solar power solutions across India.',
}

export const viewport: Viewport = {
  themeColor: '#0a2e1d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
