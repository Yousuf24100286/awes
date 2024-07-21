'use client';

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import CallToAction from "./CallToAction";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
  {
    name: 'Home',
    href: '/',
    show: true,
  },
  {
    name: 'Services',
    href: '/services',
    show: true,
  },
  {
    name: 'About us',
    href: '/about-us',
    show: true,
  },
];


const Navigation = () => {
  const pathname = usePathname();
  return (
    navigation.map((item, index) => {
      return (
        <Link
          key={index}
          href={item.href}
          className={cn('hover:text-dark-marron', item.href === pathname && 'text-dark-marron')}
        >{item.name}</Link>
      );
    })
  )
};

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
            <Navigation />
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
                <Navigation />
              </nav>
              <CallToAction />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}