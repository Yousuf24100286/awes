import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const layout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <main className='flex flex-col justify-center items-center bg-[#FFFCF7]'>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default layout