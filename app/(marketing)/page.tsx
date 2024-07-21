import CallToAction from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    imgSrc: "/feature1.svg",
    imgAlt: "Study and pass TOEFL iBT Icon",
    title: "Study and pass TOEFL iBT",
    description:
      "Your dream career as a U.S. healthcare professional kicks off with proficiency in the English language. AWES provides you with the study resources to master and excel in English, helping you apply for and take the TOEFL iBT, the necessary first step towards immigration.",
  },
  {
    imgSrc: "/feature2.svg",
    imgAlt: "Study and pass CGFNS Certificate program Icon",
    title: "Study and pass CGFNS Certificate program",
    description:
      "AWES helps you prepare for the CGFNS Certification Program, which is compulsory for foreign graduate nurses who wish to join the U.S. healthcare system.",
  },
  {
    imgSrc: "/feature3.svg",
    imgAlt: "Study and pass NCLEX Icon",
    title: "Study and pass NCLEX",
    description:
      "To obtain a license and practice as a registered nurse, all graduate nurses must pass the NCLEX-RN exam to ensure their skills and experience meet the requirements of U.S. medical facilities. AWES provides comprehensive support at every step of this critical exam.",
  },
  {
    imgSrc: "/feature4.svg",
    imgAlt: "Get state RN license for 42 states Icon",
    title: "Get state RN license for 42 states",
    description:
      "Streamline your maintenance operations with our intelligent Computerized Machine Maintenance Software (CMMS). Designed to enhance productivity and minimize downtime, our CMMS solution automates scheduling, tracks asset health, and manages work orders with ease.",
  },
  {
    imgSrc: "/feature5.svg",
    imgAlt: "Get your green card Icon",
    title: "Get your green card",
    description:
      "From visa screening to relocation logistics, Team AWES has you covered. We handle all your immigration paperwork and submit it to a U.S. immigration attorney, saving you the hassle. Welcome to your dream life in the U.S.",
  },
];

const processSteps = [
  {
    title: "Easy Document Submission",
    description: "Sign up and upload your initial documents. This helps us evaluate if you meet the prerequisites for joining the U.S. healthcare system.",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e4aaf2c51664b1376b0ebdb9c3cc032a611028c6742ad9d736ba15bc8c91754?apiKey=37e9b177900140c9be4212bdea99ec1b&"
  },
  {
    title: "Simplified Application Process",
    description: "AWES offers full immigration services for foreign graduates. We've transformed a long, hectic process into a guided, multi-step journey so you can focus on your preparations while we handle the logistics.",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca640080191e8d5a9b8774e3526bbbd9b76e694fc59454522a81b9b18c0a2ca2?apiKey=37e9b177900140c9be4212bdea99ec1b&"
  },
  {
    title: "Feedback-Assisted Application Progress",
    description: "We provide regular feedback and assistance on your document submissions and exam preparations, handling the logistics so you can focus on turning your dreams into reality. We value communication and our dedicated team is always ready to assist you.",
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

const Specializations = () => (
  <section className='bg-[#FFFCF7] w-full'>
    <div className="px-5 w-full mx-auto md:max-w-3xl xl:max-w-6xl">
      <div className="grid gap-5 w-full max-w-4xl mx-auto my-20">
        <h2 className="text-center text-3xl md:text-5xl font-bold md:font-extrabold tracking-wide text-sky-600 leading-10 md:leading-[55.86px] w-full md:max-w-3xl xl:max-w-6xl px-5 mx-auto">
          Services we specialise in
        </h2>
        <p className="text-sm text-center text-slate-950 text-opacity-60">
          American Worldwide Educational Services is your trusted partner, guiding you from being a foreign graduate nurse to joining the U.S. healthcare profession and becoming a U.S. citizen. We’re with you every step of the way.
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
);

const ProcessStep = ({ title, description, image }: { image: string, title: string, description: string }) => {
  return <div className="self-center px-8 py-6 w-full rounded-3xl border border-[#DF6C4F] border-solid">
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
};

const HeroSection = () => {
  return (
    <>
      <header className="hidden relative md:flex flex-col w-full bg-teal-800">
        <div className="md:max-w-3xl xl:max-w-6xl px-5 mx-auto mt-20 mb-10">
          <div className="flex gap-5">
            <div className="flex z-10 flex-col w-1/2 text-white gap-9">
              <h1 className="text-3xl font-bold xl:text-5xl xl:font-extrabold tracking-wide leading-10 xl:leading-[56px]">
                Your one-stop platform for starting your nursing career in the U.S.
              </h1>
              <p className="text-sm leading-5">
                Are you a foreign graduate nurse looking to join the U.S. healthcare system? You are in the right spot. We help talented nursing professionals transform their credentials into a U.S. license, secure their dream job, and obtain green cards for themselves and their families.
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
            Your one-stop platform for starting your nursing career in the U.S.
          </h1>
          <p>
            Are you a foreign graduate nurse looking to join the U.S. healthcare system? You are in the right spot. We help talented nursing professionals transform their credentials into a U.S. license, secure their dream job, and obtain green cards for themselves and their families.
          </p>
          <CallToAction />
        </div>
      </header>

    </>
  )
}


export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <Specializations />
      <section className='flex flex-col gap-10 xl:gap-20 py-15 w-full'>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide text-jelly-bean text-center mt-[88px]">
          See how we work with you
        </h2>
        <div className="px-5 w-full mx-auto md:max-w-3xl xl:max-w-6xl space-y-10">
          {
            processSteps.map((step, index) => (
              <ProcessStep key={index} {...step} />
            ))
          }
        </div>
      </section>
      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}

function TestimonialsSection() {
  return (
    <section className="w-full space-y-12 pt-10">
      <h2 className="text-center text-3xl md:text-5xl font-bold md:font-extrabold tracking-wide text-sky-600 leading-10 md:leading-[55.86px] w-full md:max-w-3xl xl:max-w-6xl px-5 mx-auto">
        Discover what our clients are saying
      </h2>
      <div className="w-full bg-[#D4E4ED] py-12">
        <div className="w-full md:max-w-3xl xl:max-w-6xl px-5 mx-auto space-y-8">
          <p className="text-center leading-5 text-slate-950">
            My immigration from the Philippines to the United States was only made possible by AWES. They started the process from the very beginning. They helped me get all the papers and passed all the required exams until I got a great job. They were here for me the entire time, every step of the way.
          </p>
          <div className="flex flex-col items-center justify-center md:flex-row gap-1 md:gap-3">
            <div className="w-10 h-10 relative">
              <Image
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/71245349242ce7f2ae388a335bd7964c15a496bee062494ee9926e8826676439?apiKey=37e9b177900140c9be4212bdea99ec1b&"
                alt="Kassandra L."
                fill
              />
            </div>
            <p className="font-bold text-gray-900">Kassandra L.</p>
            <p className="hidden md:block text-jelly-bean font-extrabold">
              /
            </p>
            <span className="text-gray-500">US Healthcare professional</span>
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
          Are you ready to join the U.S. healthcare system with help from AWES professionals?
        </h2>
        <Button variant="brand" size='lg' asChild>
          <Link href='/about-us'>
            Contact us today
          </Link>
        </Button>
      </div>
    </section>
  )
}

