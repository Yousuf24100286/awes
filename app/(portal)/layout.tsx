import UserRoute from "@/components/auth/user-route"
import Sidebar from "./_components/Sidebar"
import Navbar from "./_components/Navbar"

const layout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <main className="min-h-screen">
      <UserRoute />
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex items-center justify-center grow p-4 bg-[#FEF4DC]">
          {children}
        </div>
      </div>
    </main >
  )
}

export default layout