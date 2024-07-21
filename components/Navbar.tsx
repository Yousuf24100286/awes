import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import CallToAction from "./CallToAction";

export default function Navbar() {
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
          <CallToAction />
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
              <CallToAction />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}