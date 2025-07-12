import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GHOSTY - Premium Gaming Cheats & Hacks | Undetected & Safe",
  description:
    "Buy the best undetected gaming cheats for Valorant, COD Warzone, Apex Legends, Rust and more. Premium quality hacks with 24/7 support, instant delivery, and guaranteed safety.",
  keywords:
    "gaming cheats, valorant cheat, cod warzone hack, apex legends cheat, rust hack, hwid spoofer, undetected cheats, gaming hacks",
  openGraph: {
    title: "GHOSTY - Premium Gaming Cheats & Hacks",
    description: "The most trusted provider of undetected gaming cheats with instant delivery and 24/7 support.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GHOSTY",
              description: "Premium gaming cheats and hacks provider",
              url: "https://ghostyservices.com",
              logo: "https://ghostyservices.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "English",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
