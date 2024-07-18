'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { MenuIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { UserButton } from '@/components/auth/user-button';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navigation = [
  {
    name: 'My Application',
    href: '/application',
    show: true,
  },
  {
    name: 'Documents',
    href: '/documents',
    show: true,
  },
];

const Navigation = () => {
  const pathname = usePathname();
  return (
    <div className='flex flex-col'>
      {navigation.map((item, index) => {
        return (
          <Button
            key={index}
            asChild
            className='font-medium'
            variant={item.href === '/documents' && pathname === '/documents' ? 'default' : item.href !== '/documents' && pathname !== '/documents' ? 'default' : 'ghost'}
          >
            <Link
              href={item.href}
              className={cn(
                'mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-foreground',
                !item.show && 'hidden'
              )}
            >
              {item.name}
            </Link>
          </Button>
        );
      })}
    </div>
  )
};

const Navbar = () => {
  return (
    <div className="flex justify-between h-18 items-center px-4 lg:h-[60px] lg:px-6 shadow py-8">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="shrink-0 md:hidden" size="icon" variant="outline">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col" side="left">
          <nav className="grid gap-6 text-lg font-medium">
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
      <Link className="flex items-center gap-2 font-semibold" href="/">
        <Image
          src="/logo.png"
          alt="AWES logo"
          width={150}
          height={43}
        />

      </Link>
      <UserButton />
    </div>
  )
}

export default Navbar