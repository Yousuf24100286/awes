import { UserButton } from "@/components/auth/user-button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const layout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex max-w-7xl mx-auto">
        <Sidebar />
        {children}
      </div>
    </div>
  )
}

export default layout;


function NavItem({ icon, text, active }: { icon: string, text: string, active: boolean }) {
  return (
    <a href="#" className={`flex gap-4 self-center px-4 py-2 mt-1.5 max-w-full rounded-xl w-[241px] ${active ? 'text-white bg-pink-900 border border-amber-300 border-solid' : 'text-black'}`}>
      <img loading="lazy" src={icon} alt="" className="shrink-0 my-auto w-5 aspect-square" />
      <div>{text}</div>
    </a>
  );
}

function Sidebar() {
  const navItems = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f5f92afbbcdc2b992033bc8c9a7cd255df25a7bdb2b9bc51af2f253d4a421405?apiKey=37e9b177900140c9be4212bdea99ec1b&", text: "Homepage", active: true },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7362ca7e1e41e022ed0573bc008baa312e869b05361eb63b9a17a8254af93dbd?apiKey=37e9b177900140c9be4212bdea99ec1b&", text: "My application", active: false }
  ];

  return (
    <aside className="w-3/12 max-h-screen">
      <nav className="py-5">
        <h2 className="text-xl font-bold leading-8">
          Adeel Akram
        </h2>
        <Separator className="my-5" />
        {navItems.map((item, index) => (
          <NavItem key={index} icon={item.icon} text={item.text} active={item.active} />
        ))}
      </nav>
    </aside>
  );
}

function Header() {
  return (
    <header className="py-2 shadow">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/306ecc9ac4cba437fdcdb14bcea8e5b0b6cedb7e0a458adffdeff2341598cd77?apiKey=37e9b177900140c9be4212bdea99ec1b&"
          alt="Company logo"
          width={207}
          height={60}
        />
        <UserButton />
      </div>
    </header>
  );
}
