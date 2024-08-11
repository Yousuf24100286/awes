import { Globe } from "lucide-react"
import { useRouter } from "next/navigation"

const SwitchLanguage = ({ locale }: { locale: 'en' | 'ar' }) => {
  const router = useRouter();
  return (
    <div className="bg-jelly-bean h-[30px] w-full shadow">
      <div className="px-5 w-full mx-auto md:max-w-3xl xl:max-w-6xl">
        <div className="flex items-center gap-2.5 ml-auto w-max mt-1 text-white hover:cursor-pointer"
          onClick={() => router.push(`/?locale=${locale}`)}
        >
          {locale === 'ar' ? <p>Switch Language</p> : <p>تبديل اللغة</p>}
          <Globe className="w-5 h-5" />
        </div>
      </div>
    </div>)
}

export default SwitchLanguage