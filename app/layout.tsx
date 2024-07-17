import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import './globals.css'
// import "@uploadthing/react/styles.css";
import { Toaster } from "@/components/ui/sonner";

// uploadthing
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AWES',
  description: 'AWES is a leading technology agency specializing in innovative solutions, including process automation, custom software development, and IT consultation.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body>
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          <Toaster position='top-center' richColors />
          {children}
          <script defer src="https://cloud.umami.is/script.js" data-website-id="b9b3e225-6122-465e-a11a-86840f65e25e" />
        </body>
      </html>
    </SessionProvider>
  )
}
