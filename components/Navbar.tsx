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
import { toast } from "sonner";

export default function Navbar() {
  const role = useCurrentRole();

  toast.info(`role: ${role === 'ADMIN' ? 'Admin' : 'User'}`);

  const callToAction = role === 'ADMIN' ? (
    <Button variant="brand" size="brand" asChild>
      <Link href='/static-analytics'>
        Dashboard
      </Link>
    </Button>
  ) :
    role === 'USER' ? (
      <Button variant="brand" size="brand" asChild>
        <Link href='/application'>
          Application
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
      <div className="flex items-center justify-between gap-5 max-w-6xl px-5 w-full mx-auto h-[75px]">
        <Link href='/' className="flex items-center gap-2.5"
        >
          <img
            src="/logo.png"
            alt="AWES logo"
            className="shrink-0 max-w-full aspect-[3.45] w-[150px] sm:w-[170px] md:w-[207px]"
          />
        </Link>
        <div className="hidden sm:flex gap-8">
          <nav className="flex gap-5 my-auto">
            <Link href='/' className='hover:text-dark-marron'>Home</Link>
            <Link href='/services' className='hover:text-dark-marron'>Services</Link>
            <Link href='/about-us' className='hover:text-dark-marron'>About us</Link>
          </nav>
          {callToAction}
        </div>
        <Sheet>
          <SheetTrigger className="block sm:hidden">
            <Menu size={32} className="opacity-80" />
          </SheetTrigger>
          <SheetContent side='left'>
            <div className="flex flex-col gap-8">
              <Link href='/' className="flex items-center gap-2.5"
              >
                <img
                  src="/logo.png"
                  alt="AWES logo"
                  className="shrink-0 max-w-full aspect-[3.45] w-[150px] sm:w-[207px]"
                />
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