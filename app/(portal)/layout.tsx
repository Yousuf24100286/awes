import UserRoute from "@/components/auth/user-route"
import Sidebar from "./_components/Sidebar"
import Navbar from "./_components/Navbar"

const layout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <UserRoute />
      <main className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex grow h-full">
          <Sidebar />
          <div className="flex grow p-4 bg-[#FEF4DC]">
            {children}
          </div>
        </div>
      </main >
    </>
  )
}

export default layout