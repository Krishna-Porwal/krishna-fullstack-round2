import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { StructuredData } from "@/components/structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lanora Electroplaters | Industrial Electroplating Services",
  description:
    "High-quality electroplating services for automotive and manufacturing industries. Chrome plating, nickel plating, zinc coating, and more.",
  generator: "v0.app",
  keywords: "electroplating, chrome plating, nickel plating, zinc coating, automotive, manufacturing",
  metadataBase: new URL("https://lanora-electroplaters.com"),
  openGraph: {
    title: "Lanora Electroplaters | Industrial Electroplating Services",
    description: "High-quality electroplating services for automotive and manufacturing industries.",
    type: "website",
    url: "https://lanora-electroplaters.com",
    siteName: "Lanora Electroplaters",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lanora Electroplaters - Industrial Electroplating Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lanora Electroplaters | Industrial Electroplating Services",
    description: "High-quality electroplating services for automotive and manufacturing industries.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://lanora-electroplaters.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
