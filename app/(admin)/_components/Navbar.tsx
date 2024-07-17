import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { MenuIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { UserButton } from '@/components/auth/user-button';
import Image from 'next/image';

const navigation = [
  {
    name: 'Static Analytics',
    href: '/static-analytics',
    show: true,
  },
  {
    name: 'Tutor Applications',
    href: '/tutor-applications',
  },
];

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
                  // className="shrink-0 max-w-full aspect-[3.45] w-[150px] sm:w-[170px] md:w-[207px]"
                  width={150}
                  height={43}
                />

              </Link>
            </div>
            <div>
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                {navigation.map((item, index) => {
                  return (
                    <Link
                      href={item.href}
                      key={index}
                      className={cn(
                        'mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground',
                        !item.show && 'hidden'
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
          <div className='px-4 mb-4'>
            <UserButton />
          </div>
        </div>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="shrink-0 md:hidden" size="icon" variant="outline">
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
                // className="shrink-0 max-w-full aspect-[3.45] w-[150px] sm:w-[170px] md:w-[207px]"
                width={150}
                height={43}
              />
            </Link>
            {navigation.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    'mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground',
                    !item.show && 'hidden'
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default Navbar