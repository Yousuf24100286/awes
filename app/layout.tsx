import type { Metadata } from 'next'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import './globals.css'
import { Toaster } from "@/components/ui/sonner";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'AWES',
  description: 'American Worldwide Educational Services (AWES) is your trusted partner, guiding you from being a foreign graduate nurse to joining the U.S. healthcare profession and becoming a U.S. citizen.',
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
          <div className='fixed bottom-0 right-0 p-4'>
            <a href="https://wa.me/19294138699" target='_blank'>
              <Image src="/whatsapp-icon.png" alt="whatsapp icon" width={60} height={60} />
            </a>
          </div>
        </body>
      </html>
    </SessionProvider>
  )
}
