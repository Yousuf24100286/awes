'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { MenuIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { UserButton } from '@/components/auth/user-button';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navigation = [
  {
    name: 'Static Analytics',
    href: '/static-analytics',
    show: true,
  },
  {
    name: 'Users',
    href: '/users',
    show: true,
  },
];

const Navigation = () => {
  const pathname = usePathname();
  return (
    navigation.map((item, index) => {
      return (
        <Button
          key={index}
          asChild
          // TODO: fix the variant
          variant={item.href === '/static-analytics' && pathname === '/static-analytics' ? 'default' : item.href !== '/static-analytics' && pathname !== '/static-analytics' ? 'default' : 'ghost'}
        >
          <Link
            href={item.href}
            className={cn(
              'mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-foreground hover:text-foreground',
              !item.show && 'hidden'
            )}
          >
            {item.name}
          </Link>
        </Button>
      );
    })
  )
};

const Navbar = () => {

  return (
    <>
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2 justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
              <Link className="flex items-center gap-2 font-semibold" href="/">
                <Image
                  src="/logo.png"
                  alt="AWES logo"
                  width={150}
                  height={43}
                />

              </Link>
            </div>
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Navigation />
            </nav>
          </div>
          <div className='px-4 mb-4'>
            <UserButton />
          </div>
        </div>
      </div >
      <Sheet>
        <SheetTrigger asChild>
          <Button className="shrink-0 md:hidden ml-2 mt-2" size="icon" variant="outline">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col" side="left">
          <nav className="grid gap-2 text-lg font-medium">
            <Link className="flex items-center gap-2 text-lg font-semibold"
              href="/"
            >
              <Image
                src="/logo.png"
                alt="AWES logo"
                width={150}
                height={43}
              />
            </Link>
            <Navigation />
          </nav>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default Navbar;
