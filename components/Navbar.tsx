'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import { LoginButton } from "@/components/auth/login-button";
import { useCurrentRole } from "@/hooks/use-current-role";
import Image from "next/image";

export default function Navbar() {
  const role = useCurrentRole();

  const callToAction = role === 'ADMIN' ? (
    <Button variant="brand" size="brand" asChild>
      <Link href='/users'>
        Go to Dashboard
      </Link>
    </Button>
  ) :
    role === 'USER' ? (
      <Button variant="brand" size="brand" asChild>
        <Link href='/application'>
          Go to Dashboard
        </Link>
      </Button>
    )
      : (
        <LoginButton asChild>
          <Button variant="brand" size="brand">
            Apply now
          </Button>
        </LoginButton>
      );

  return (
    <header className="bg-white w-full shadow">
      <div className="flex items-center justify-between gap-5 px-6 w-full mx-auto h-[75px] md:max-w-3xl xl:max-w-6xl">
        <Link href='/' className="flex items-center gap-2.5"
        >
          <div className="relative aspect-[3.45] w-[150px] md:w-[207px]">
            <Image
              src="/logo.png"
              alt="AWES logo"
              fill
            />
          </div>
        </Link>
        <div className="hidden md:flex gap-8">
          <nav className="flex gap-5 my-auto">
            <Link href='/' className='hover:text-dark-marron'>Home</Link>
            <Link href='/services' className='hover:text-dark-marron'>Services</Link>
            <Link href='/about-us' className='hover:text-dark-marron'>About us</Link>
          </nav>
          {callToAction}
        </div>
        <Sheet>
          <SheetTrigger className="block md:hidden">
            <Menu size={32} className="opacity-80" />
          </SheetTrigger>
          <SheetContent side='left'>
            <div className="flex flex-col gap-8">
              <Link href='/' className="flex items-center gap-2.5"
              >
                <div className="relative aspect-[3.45] w-[150px] md:w-[207px]">
                  <Image
                    src="/logo.png"
                    alt="AWES logo"
                    fill
                  />
                </div>
              </Link>
              <nav className="flex flex-col gap-5 my-auto">
                <Link href='/' className='hover:text-dark-marron'>Home</Link>
                <Link href='/services' className='hover:text-dark-marron'>Services</Link>
                <Link href='/about-us' className='hover:text-dark-marron'>About us</Link>
              </nav>
              {callToAction}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}