
'use client';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import SwitchLanguage from "./SwitchLanguage";
import { Separator } from '@/components/ui/separator'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { subscribeNewsletter } from "@/actions/subscribe-newsletter";
import { useCurrentRole } from "@/hooks/use-current-role";
import { RegisterButton } from "./auth/register-button";


export default function ArabicLandingPage() {
  return (
    <main className='flex flex-col justify-center items-center bg-[#FFFCF7]'>
      <SwitchLanguage locale='en' />
      <Navbar />
      <HeroSection />
      <Specializations />
      <ProcessesSection />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
}

const CallToAction = () => {
  const role = useCurrentRole();

  return role === 'ADMIN' ? (
    <Button variant="brand" size="brand" className="w-max">
      <Link href='/users'>
        اذهب إلى لوحة القيادة
      </Link>
    </Button>
  ) :
    role === 'USER' ? (
      <Button variant="brand" size="brand" className="w-max">
        <Link href='/application'>
          اذهب إلى لوحة القيادة
        </Link>
      </Button>
    )
      : (
        <RegisterButton asChild>
          <Button variant="brand" size="brand" className="w-max">
            قدم الآن
          </Button>
        </RegisterButton>
      );
}

const navigation = [
  {
    name: 'الرئيسية',
    href: '/',
    show: true,
  },
  {
    name: 'خدمات',
    href: '/services',
    show: true,
  },
  {
    name: 'عنا',
    href: '/about-us',
    show: true,
  },
];


const Navigation = () => {
  const pathname = usePathname();
  return (
    navigation.map((item, index) => {
      return (
        <Link
          key={index}
          href={item.href}
          className={cn('hover:text-dark-marron', item.href === pathname && 'text-dark-marron')}
        >{item.name}</Link>
      );
    })
  )
};

function Navbar() {
  return (
    <header className="bg-white w-full shadow">
      <div className="flex items-center justify-between gap-5 h-[75px] px-5 w-full mx-auto md:max-w-3xl xl:max-w-6xl">
        <Link href='/' className="flex items-center gap-2.5"
        >
          <div className="relative aspect-[3.45] w-[150px] md:w-[207px]">
            <Image
              src="/logo.png"
              alt="AWES logo"
              fill
            />
          </div>
        </Link>
        <div className="hidden md:flex gap-8">
          <nav className="flex gap-5 my-auto">
            <Navigation />
          </nav>
          <CallToAction />
        </div>
        <Sheet>
          <SheetTrigger className="block md:hidden">
            <Menu size={32} className="opacity-80" />
          </SheetTrigger>
          <SheetContent side='left'>
            <div className="flex flex-col gap-8">
              <Link href='/' className="flex items-center gap-2.5"
              >
                <div className="relative aspect-[3.45] w-[150px] md:w-[207px]">
                  <Image
                    src="/logo.png"
                    alt="AWES logo"
                    fill
                  />
                </div>
              </Link>
              <nav className="flex flex-col gap-5 my-auto">
                <Navigation />
              </nav>
              <CallToAction />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isPending, startTransition] = useTransition();

  return (
    <section className="bg-brand w-full">
      <div className="flex flex-col md:flex-row gap-8 w-full md:max-w-3xl xl:max-w-6xl px-5 mx-auto py-6">
        <div className="flex flex-col md:w-3/12 md:mt-5">
          <Link href='/' className="flex items-center gap-2.5">
            <div className="relative aspect-[3.45] w-[150px] md:w-[207px]">
              <Image
                src="/logo-footer.png"
                alt="AWES logo"
                fill
              />
            </div>
          </Link>
          <div className="mt-[32px] text-sm text-white">
            <p>40 Wall Street</p>
            <p>28th Floor, Unit # 2709</p>
            <p>New York NY 10005</p>
            <p>United States</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-8 md:mt-28 w-full md:w-9/12 justify-between">
          <form className="md:mx-auto flex gap-3 items-end"
            onSubmit={(e) => {
              e.preventDefault()
              startTransition(() => {
                subscribeNewsletter(email)
                  .then((data) => {
                    if (data.success)
                      toast.success(data.success);
                    if (data.error)
                      toast.error(data.error);
                    setEmail('');
                  })
                  .catch((error) => {
                    console.error(error);
                    toast.error("An error occurred. Please try again.");
                  })
              });
            }}
          >
            <div className="space-y-10 md:space-y-0 md:grid gap-5 grow">
              <p className="text-sm text-white whitespace-nowrap">
                اضغط زر الاشتراك لتضل على صلة مع آخر الأخبار والتحديثات.هيا افعلها.
              </p>
              <div className="flex gap-4">
                <Label htmlFor="email" className="sr-only">أدخل عنوان بريدك الالكتروني</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Enter your email"
                  placeholder="أدخل عنوان بريدك الالكتروني"
                  className="rounded-xl shadow-lg h-12"
                />
                <Button variant='brand' size='brand' disabled={isPending}>اشترك</Button>
              </div>
            </div>
          </form>
          <div className='flex flex-row md:flex-col xl:flex-row justify-between mt-12 gap-5 md:mt-0'>
            <div className="flex flex-col text-white gap-5">
              <h3 className="text-base font-medium leading-4">تابعنا</h3>
              <div className="flex gap-2">
                <div className="rounded-full w-6 h-6 bg-white flex justify-between items-center">
                  <Instagram className='text-black w-4 h-4 mx-auto stroke-[1.2px]' />
                </div>
                <div className="rounded-full w-6 h-6 bg-white flex justify-between items-center">
                  <Facebook className='text-black w-4 h-4 mx-auto stroke-[1.2px]' />
                </div>
                <div className="rounded-full w-6 h-6 bg-white flex justify-between items-center">
                  <Twitter className='text-black w-4 h-4 mx-auto stroke-[1.2px]' />
                </div>
              </div>
            </div>
            <div className="flex flex-col text-white gap-5">
              <h3 className="text-base font-medium leading-4">اتصل بنا</h3>
              <p className="text-sm whitespace-nowrap">1-866-708-4372</p>
            </div>
          </div>
        </div>
      </div>
      <div className='h-6 md:h-16 w-full' />
      <Separator className='hidden md:block' />
      <div className="flex flex-col-reverse md:flex-row py-6 justify-between gap-5 text-sm text-white  md:max-w-3xl xl:max-w-6xl px-5 w-full mx-auto">
        <div className="text-center">©{new Date().getFullYear()} All Rights Reserved</div>
        {/* <div className="flex gap-3 md:gap-5 md:justify-between justify-center">
          <a className="hover:underline">Privacy Policy</a>
          <a className="hover:underline">Terms of Use</a>
          <a className="hover:underline">Sales and Refunds</a>
          <a className="hover:underline">Legal</a>
          <a className="hover:underline">Site Map</a>
        </div> */}
      </div>
    </section>
  )
}


const features = [
  {
    imgSrc: "/feature1.svg",
    imgAlt: "Study and pass TOEFL iBT Icon",
    title: "ادرس واجتاز TOEFL IBT",
    description:
      "تبدأ مهنة أحلامك كمتخصص في الرعاية الصحية في الولايات المتحدة بإتقان اللغة الإنجليزية. توفر لك AWES موارد الدراسة لإتقان اللغة الإنجليزية والتفوق فيها، مما يساعدك على التقدم للحصول على اختبار TOEFL IBT والحصول عليه، وهو الخطوة الأولى الضرورية نحو الهجرة.",
  },
  {
    imgSrc: "/feature2.svg",
    imgAlt: "Study and pass CGFNS Certificate program Icon",
    title: "ادرس واجتاز برنامج شهادة CGFNS",
    description:
      "تساعدك AWES على الاستعداد لبرنامج شهادة CGFNS، وهو أمر إلزامي للمرضين الخريجين الأجانب الذين يرغبون في الانضمام إلى نظام الرعاية الصحية في الولايات المتحدة",
  },
  {
    imgSrc: "/feature3.svg",
    imgAlt: "Study and pass NCLEX Icon",
    title: "NCLEX/ادرس واجتاز",
    description:
      "للحصول على ترخيص وممارسة مهنة ممرضة مسجلة، يجب على جميع الممرضين الخريجين اجتياز اختبار NCLEX-RN للتأكد من أن مهاراتهم وخبراتهم تلبي متطلبات المرافق الطبية الأمريكية . توفر AWES دعماً شاملاً في كل خطوة من هذا الاختبار المهم .",
  },
  {
    imgSrc: "/feature4.svg",
    imgAlt: "Get state RN license for 42 states Icon",
    title: "احصل على ترخيص RN الخاص بالولاية لـ ٤٢ ولاية",
    description:
      "تساعدك AWES في الحصول على ترخيص التمريض الحكومي المدمج (ENLC) مما يجعلك مؤهلاً لممارسة التمريض في ٤٢ ولاية . نحن نقدم الموارد والإرشادات لتأمين الترخيص الخاص بك",
  },
  {
    imgSrc: "/feature5.svg",
    imgAlt: "Get your green card Icon",
    title: "احصل على بطاقتك الخضراء",
    description:
      "بدءًا من فحص التأشيرة ووصولاً إلى لوجستيات النقل، يقوم فريق (AWES) بتغطية كل ما تحتاجه نحن نتعامل مع جميع أوراق الهجرة الخاصة بك ونقدمها إلى محامي الهجرة الأمريكي، مما يوفر عليك المتاعب . مرحبا بك في حياة أحلامك في الولايات المتحدة .",
  },
];

const processSteps = [
  {
    title: "تقديم المستندات بسهولة",
    description: "قم بالتسجيل وتحميل مستنداتك الأولية. يساعدنا ذلك في تقييم ما إذا كنت تستوفي الشروط المسبقة للانضمام إلى نظام الرعاية الصحية الأمريكي",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e4aaf2c51664b1376b0ebdb9c3cc032a611028c6742ad9d736ba15bc8c91754?apiKey=37e9b177900140c9be4212bdea99ec1b&"
  },
  {
    title: "تقديم طلب مبسطة",
    description: "تقدم (AWES) خدمات هجرة كاملة للخريجين الأجانب. لقد حولنا عملية طويلة ومحمومة إلى رحلة موجهة متعددة الخطوات حتى تتمكن من التركيز على استعداداتك أثناء تعاملنا مع الخدمات اللوجستية.",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca640080191e8d5a9b8774e3526bbbd9b76e694fc59454522a81b9b18c0a2ca2?apiKey=37e9b177900140c9be4212bdea99ec1b&"
  },
  {
    title: "تقدم التطبيق بمساعدة التعليقات",
    description: "نحن نقدم تعليقات ومساعدة منتظمة على تقديم المستندات والاستعدادات للامتحانات والتعامل مع الخدمات اللوجستية حتى تتمكن من التركيز على تحويل أحلامك إلى حقيقة واقعة. نحن نقدر التواصل وفريقنا المتفاني مستعد دائما لمساعدتك",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/320be43547b38ec59a13270bb3e57c644c0eca304a0234c4b1ba353245b65854?apiKey=37e9b177900140c9be4212bdea99ec1b&"
  }
];

function FeatureCard({ imgSrc, imgAlt, title, description }: { imgSrc: string; imgAlt: string; title: string; description: string }) {
  return (
    <article className="flex flex-col p-7 rounded-xl shadow bg-white lg:w-[calc(50%_-_16px)]">
      <img loading="lazy" src={imgSrc} alt={imgAlt} className="aspect-square w-[62px]" />
      <h2 className="mt-3.5 text-xl font-bold leading-8 text-cyan-700">{title}</h2>
      <p className="mt-4 text-sm leading-5 text-slate-950 text-opacity-60">{description}</p>
    </article>
  );
}

function Specializations() {
  return (
    <section className='bg-[#FFFCF7] w-full'>
      <div className="px-5 w-full mx-auto md:max-w-3xl xl:max-w-6xl">
        <div className="grid gap-5 w-full max-w-4xl mx-auto my-20">
          <h2 className="text-center text-3xl md:text-5xl font-bold md:font-extrabold tracking-wide text-sky-600 leading-10 md:leading-[55.86px] w-full md:max-w-3xl xl:max-w-6xl px-5 mx-auto">
            الخدمات التي نتخصص فيها
          </h2>
          <p className="text-sm text-center text-slate-950 text-opacity-60">
            الخدمات التعليمية الأمريكية في جميع أنحاء العالم هي شريكك الموثوق به ويرشدك من أن تكون ممرضة خريجة أجنبية إلى الانضمام إلى مهنة الرعاية الصحية الأمريكية وتصبح مواطنا أمريكيا. نحن معك في كل خطوة على الطريق
          </p>
        </div>
        <div className='flex flex-row flex-wrap justify-center gap-8'>
          {
            features.map((feature, index) => (
              <FeatureCard
                key={index}
                imgSrc={feature.imgSrc}
                imgAlt={feature.imgAlt}
                title={feature.title}
                description={feature.description}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

function ProcessStep({ title, description, image }: { image: string, title: string, description: string }) {
  return (
    <div className="self-center px-8 py-6 w-full rounded-3xl border border-[#DF6C4F] border-solid">
      <div className="flex max-md:flex-col max-md:gap-10">
        <div className="flex flex-col justify-between w-[66%] max-md:ml-0 max-md:w-full">
          <div className="space-y-6">
            <h3 className="text-xl md:text-3xl font-extrabold leading-10 text-sky-600">{title}</h3>
            <p className="text-sm leading-5 text-slate-950 text-opacity-60">{description}</p>
          </div>
          <div className="max-md:hidden">
            <CallToAction />
          </div>
        </div>
        <div className="space-y-2 w-[34%] max-md:w-full">
          <div className="flex flex-col">
            <img loading="lazy" src={image} alt={`Illustration for ${title}`} className="grow w-full aspect-[1.41]" />
          </div>
          <div className="md:hidden">
            <CallToAction />
          </div>
        </div>
      </div>
    </div>
  )
};

function HeroSection() {
  return (
    <>
      <header className="hidden relative md:flex flex-col w-full bg-teal-800">
        <div className="md:max-w-3xl xl:max-w-6xl px-5 mx-auto mt-20 mb-10">
          <div className="flex gap-5">
            <div className="flex z-10 flex-col w-1/2 text-white gap-9">
              <h1 className="text-3xl font-bold xl:text-5xl xl:font-extrabold tracking-wide leading-10 xl:leading-[56px]">
                منصتك الشاملة لبدء حياتك المهنية في التمريض في الولايات المتحدة
              </h1>
              <p className="text-sm leading-6 tracking-wider">
                هل أنت ممرضة أجنبية خريجة تتطلع إلى الانضمام إلى نظام الرعاية الصحية الأمريكي ؟ أنت في المكان الصحيح. نحن نساعد المتخصصين في التمريض الموهوبين على تحويل أوراق اعتمادهم إلى ترخيص أمريكي، وتأمين وظيفة أحلامهم والحصول على بطاقات خضراء لأنفسهم ولعائلاتهم
              </p>
              <CallToAction />
            </div>
            <div className="absolute w-1/2 md:max-w-[413px] xl:max-w-[660px] xl:h-[500px] h-[452px] right-0 bottom-0">
              <div className="relative w-full xl:h-[500px] h-[452px] ">
                <Image
                  loading="lazy"
                  src="/nursing-professional-clipped.jpeg"
                  alt="Nursing professional"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="md:hidden relative w-full bg-hero-gradient">
        <div className="absolute inset-0 bg-[url('/nursing-professional-background.png')] bg-no-repeat bg-cover opacity-30 z-0" />
        <div className="relative z-10 space-y-8 px-5 h-[678px] pt-14 max-w-md text-white">
          <h1 className="text-5xl font-extrabold leading-[55px]">
            منصتك الشاملة لبدء حياتك المهنية في التمريض في الولايات المتحدة
          </h1>
          <p>
            هل أنت ممرضة أجنبية خريجة تتطلع إلى الانضمام إلى نظام الرعاية الصحية الأمريكي ؟ أنت في المكان الصحيح. نحن نساعد المتخصصين في التمريض الموهوبين على تحويل أوراق اعتمادهم إلى ترخيص أمريكي، وتأمين وظيفة أحلامهم والحصول على بطاقات خضراء لأنفسهم ولعائلاتهم
          </p>
          <CallToAction />
        </div>
      </header>

    </>
  )
}

function ProcessesSection() {
  return (
    <section className='flex flex-col gap-10 xl:gap-20 py-15 w-full'>
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide text-jelly-bean text-center mt-[88px]">
        انظر كيف نعمل معك
      </h2>
      <div className="px-5 w-full mx-auto md:max-w-3xl xl:max-w-6xl space-y-10">
        {
          processSteps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))
        }
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="w-full space-y-12 pt-10">
      <h2 className="text-center text-3xl md:text-5xl font-bold md:font-extrabold tracking-wide text-sky-600 leading-10 md:leading-[55.86px] w-full md:max-w-3xl xl:max-w-6xl px-5 mx-auto">
        اكتشف ما يقوله عملاؤنا
      </h2>
      <div className="w-full bg-[#D4E4ED] py-12">
        <div className="w-full md:max-w-3xl xl:max-w-6xl px-5 mx-auto space-y-8">
          <p className="text-center leading-5 text-slate-950">
            لم تكن هجرتي من الفلبين إلى الولايات المتحدة ممكنة إلا من خلال (AWES) لقد بدأوا العملية منذ البداية. لقد ساعدوني في الحصول على جميع الأوراق واجتيازا جميع الامتحانات المطلوبة حتى حصلت على وظيفة رائعة. كانوا هنا من أجلي طوال الوقت، في كل خطوة على الطريق
          </p>
          <div className="flex flex-col items-center justify-center md:flex-row gap-1 md:gap-3">
            <div className="w-10 h-10 relative">
              <Image
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/71245349242ce7f2ae388a335bd7964c15a496bee062494ee9926e8826676439?apiKey=37e9b177900140c9be4212bdea99ec1b&"
                alt="كاساندرا إل"
                fill
              />
            </div>
            <p className="font-bold text-gray-900">كاساندرا إل</p>
            <p className="hidden md:block text-jelly-bean font-extrabold">
              /
            </p>
            <span className="text-gray-500">متخصص في الرعاية الصحية في الولايات المتحدة</span>
          </div>
        </div>
      </div>
    </section>
  )
};

function CallToActionSection() {
  return (
    <section className="px-5 w-full my-11 md:my-[73px] bg-custom-gradient md:bg-none">
      <div className="flex flex-col items-center justify-center px-20 py-16 w-full md:max-w-3xl xl:max-w-6xl mx-auto md:rounded-3xl md:bg-custom-gradient text-center gap-5">
        <h2 className="text-xl md:text-3xl font-bold md:font-extrabold leading-8 md:leading-10 text-white">
          هل أنت مستعد للانضمام إلى نظام الرعاية الصحية الأمريكي بمساعدة محترفي (AWES) ¿
        </h2>
        <Button variant="brand" size='lg' asChild>
          <Link href='/about-us'>
            اتصل بنا اليوم
          </Link>
        </Button>
      </div>
    </section>
  )
}

