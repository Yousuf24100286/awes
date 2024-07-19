import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <>
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex py-2 items-center px-2 max-w-6xl mx-auto">
          <Link className="flex items-center gap-2 font-semibold" href="/">
            <Image
              src="/logo.png"
              alt="AWES logo"
              width={207}
              height={61}
            />
          </Link>
        </div>
      </div >
    </>
  )
}
const AuthLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="h-full flex flex-col">
      <Navbar />
      {children}
    </div>
  );
}

export default AuthLayout;