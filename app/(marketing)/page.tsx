import Footer from '@/components/Footer';

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
  <section className='bg-[#FFFCF7]'>
    <div className="max-w-6xl w-full mx-auto px-5">
      <div className="grid gap-5 w-full max-w-4xl mx-auto my-20">
        <h2 className="text-5xl font-extrabold tracking-wide text-jelly-bean text-center">Services we specialise in</h2>
        <p className="text-sm text-center text-slate-950 text-opacity-60">
          American Worldwide Educational Services is your trusted partner, guiding you from being a foreign graduate nurse to joining the U.S. healthcare profession and becoming a U.S. citizen. We’re with you every step of the way.
        </p>
      </div>
      <div className='flex flex-row flex-wrap justify-center gap-8 mt-0'>
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

const ProcessStep = ({ title, description, image }: { image: string, title: string, description: string }) => (
  <section className="self-center px-8 py-6 w-full rounded-3xl border border-[#DF6C4F] border-solid max-w-6xl max-md:px-5 max-md:mt-10">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow mt-2 max-md:mt-10">
          <h3 className="text-xl md:text-3xl font-extrabold leading-10 text-sky-600">{title}</h3>
          <p className="mt-6 text-sm leading-5 text-slate-950 text-opacity-60">{description}</p>
          <button className="justify-center self-start px-4 py-2.5 mt-24 text-base font-bold leading-6 text-center text-white bg-pink-900 rounded-lg max-md:mt-10">
            Apply now
          </button>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
        <img loading="lazy" src={image} alt={`Illustration for ${title}`} className="grow w-full aspect-[1.41] max-md:mt-10" />
      </div>
    </div>
  </section>
);


export default function LandingPage() {
  return (
    <>
      <header className="flex flex-col w-full bg-teal-800 px-5">
        <div className="self-center mt-20 w-full max-w-6xl max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex z-10 flex-col px-5 mt-11 text-white max-md:mt-10">
                <h1 className="text-5xl font-extrabold tracking-wide leading-[56px]">
                  Your one-stop platform for starting your nursing career in the U.S.
                </h1>
                <p className="mt-14 text-sm leading-5 max-md:mt-10">
                  Are you a foreign graduate nurse looking to join the U.S. healthcare system? You are in the right spot. We help talented nursing professionals transform their credentials into a U.S. license, secure their dream job, and obtain green cards for themselves and their families.
                </p>
                <button className="justify-center self-start px-4 py-2.5 mt-9 text-base font-bold leading-6 text-center text-white bg-pink-900 rounded-lg">
                  Apply now
                </button>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ceceee3eee58b160d9608402d8e7739ac0ae11358d11b2ef93546c3308d42efa?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="Nursing professional" className="grow w-full aspect-[1.45]" />
            </div>
          </div>
        </div>
      </header>
      <Specializations />
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide text-jelly-bean text-center mt-[88px]">
        See how we work with you
      </h2>
      <section className='bg-[#FEFAEB] flex flex-col gap-20 py-20 px-5'>
        {
          processSteps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))
        }
      </section>
      <section>
        <h2 className="text-center text-5xl font-extrabold tracking-wide text-sky-600 leading-[55.86px] py-[38px]">
          Discover what our clients are saying
        </h2>
        <div className="flex flex-col px-16 py-20 w-full text-sm text-center bg-[#D4E4ED] max-md:px-5">
          <p className="self-center mt-4 leading-5 text-slate-950 w-[768px]">
            My immigration from the Philippines to the United States was only made possible by AWES. They started the process from the very beginning. They helped me get all the papers and passed all the required exams until I got a great job. They were here for me the entire time, every step of the way.
          </p>
          <div className="flex justify-center items-center px-16 mt-8 leading-[143%] max-md:px-5">
            <div className="flex gap-4">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/71245349242ce7f2ae388a335bd7964c15a496bee062494ee9926e8826676439?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="Kassandra L." className="shrink-0 w-10 aspect-square" />
              <div className="flex gap-1 my-auto">
                <div className="font-bold text-gray-900">Kassandra L.</div>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9d28f86eb99223c050822337c2f57e5db4ebd6c6c79f2dde0fc8cd84b3d511c?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="" className="shrink-0 w-5 aspect-square" />
                <div className="text-gray-500">US Healthcare professional</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center px-5 w-full text-center bg-stone-50 py-20">
        <div className="flex flex-col px-20 py-16 w-full rounded-3xl max-w-6xl max-md:px-5 bg-brand">
          <h2 className="mr-3.5 ml-3 text-3xl font-extrabold leading-10 text-white max-md:mr-2.5">
            Are you ready to join the U.S. healthcare system with help from AWES professionals?
          </h2>
          <button className="justify-center self-center px-4 py-2.5 mt-8 text-base font-bold leading-6 text-white bg-pink-900 rounded-lg">
            Contact us today
          </button>
        </div>
      </section>
    </>
  );
}

