import type { Metadata } from "next"
import { IBM_Plex_Sans } from "next/font/google"
import "./globals.css"
import { cn } from "../lib/utils"
import { ClerkProvider } from "@clerk/nextjs"

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
})

export const metadata: Metadata = {
  title: "ArtisteAI - Unleashing Creativity with Generative AI Art",
  description:
    "Explore the future of creativity with ArtisteAI, a generative AI platform that transforms ideas into stunning artwork. Perfect for artists, designers, and innovators seeking unique visuals and creative inspiration.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider appearance={{
      variables: {colorPrimary: '#624cf5'}
    }}>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
