'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { Home, Mail } from 'lucide-react';

const navigation = [
  {
    name: 'My Application',
    href: '/application',
    show: true,
    icon: Home,

  },
  {
    name: 'Documents',
    href: '/documents',
    show: true,
    icon: Mail,
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
          className='font-medium justify-start px-8'
          variant={item.href === '/documents' && pathname === '/documents' ? 'brand' : item.href !== '/documents' && pathname !== '/documents' ? 'brand' : 'ghost'}
        >
          <Link
            href={item.href}
            className={cn(
              'mx-[-0.65rem] flex items-start justify-start gap-4 rounded-xl px-3 py-2 text-foreground',
              !item.show && 'hidden'
            )}
          >
            <item.icon className='w-5 h-5' />
            {item.name}
          </Link>
        </Button>
      );
    })
  )
};

const Navbar = () => {
  return (
    <nav className="hidden border-r md:block px-2 text-sm font-medium lg:px-4 py-4">
      <div className='grid min-w-60 w-full'>
        <Navigation />
      </div>
    </nav>
  )
}

export default Navbar;
