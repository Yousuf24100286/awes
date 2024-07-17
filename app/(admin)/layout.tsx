import AdminRoute from "@/components/auth/admin-route"
import Navbar from "./_components/Navbar"

const layout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <AdminRoute />
      <main className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <Navbar />
        <div className="flex flex-col max-h-screen overflow-y-auto">
          {children}
        </div>
      </main>
    </>
  )
}

export default layout