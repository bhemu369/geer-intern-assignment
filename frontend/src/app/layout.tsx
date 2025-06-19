import React from 'react'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata = {
  title: 'Naksh Jewels - Premium Jewelry Collection',
  description: 'Discover exquisite handcrafted jewelry pieces',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  )
}
