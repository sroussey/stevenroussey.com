import { Metadata } from 'next'
import React from 'react'
import { Header } from '#/components/Header'
import { Footer } from '#/components/Footer'
import '#/styles/tailwind.css'
import 'focus-visible'

export const metadata: Metadata = {
  title: 'Steven Roussey',
  description: 'Personal web page.',
  // alternates: {
  //   types: {
  //     'application/rss+xml': [
  //       { url: `process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.xml` },
  //     ],
  //     'application/feed+json': [
  //       { url: `process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.json` },
  //     ],
  //   },
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="h-full antialiased" lang="en">
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div>
        <div className="relative">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
