import CallToAction from "@/components/CallToAction";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ServiceCard = ({ title, description, imageSrc, reverse, number }: { title: string; description: React.ReactNode; imageSrc: string, number: 1 | 2 | 3 | 4, reverse?: boolean }) => {
  return <section className="w-full">
    <div className={cn("flex flex-col-reverse items-center justify-between gap-12 md:border md:rounded-2xl border-red-500 md:p-7 xl:border-none", reverse ? "xl:flex-row-reverse" : "xl:flex-row")}>
      <div className="space-y-4 xl:w-1/2">
        <h2 className="text-3xl font-extrabold leading-10 text-cyan-700">
          {title}
        </h2>
        {description}
      </div>
      <div className="relative w-full xl:w-[369px] h-[341px] shadow-lg rounded-2xl">
        <Image loading="lazy" src={imageSrc} alt="Illustration" fill
          className={cn('object-cover rounded-2xl',
            number === 1 ? 'bg-[#19615C80]' :
              number === 3 ? 'bg-[#2A73BD80]' :
                ''
          )}
        />
      </div>
    </div>
  </section>
}

const ServicesList = () => {
  return <section className="space-y-16 mt-16 mx-auto w-full md:max-w-3xl xl:max-w-6xl px-5">
    <ServiceCard
      number={1}
      title="Study and pass TOEFL iBT"
      description={
        <div className="text-base leading-6">
          <p className="font-bold">1. Paid 6-Month Access Includes:</p>
          <ul className="list-disc ml-8 my-6">
            <li>1500+ practice questions</li>
            <li>2000+ commonly used vocabulary words</li>
            <li>Friendly and helpful customer support</li>
            <li>200+ hours of lessons and content</li>
            <li>Interactive vocabulary exercises and flashcards</li >
            <li>Best online practice test: 20 full-length 3-hour simulation practice tests</li>
            <li>Complete diagnostic reports showing strengths, weaknesses, scores, and feedback for all 20 full-length practice tests</li>
            <li> Personalized study plan based on your test results and 1-on-1 instant messaging with a teacher to help improve your understanding throughout your preparation course</li>
          </ul >
          <p className="font-bold">2. Full Payment for One-Time Attempt for Actual TOEFL iBT Test</p>
        </div>
      }
      imageSrc="/services/illustration-1.svg"
    />
    <ServiceCard
      number={2}
      title="Study and pass CGFNS certificate program"
      description={
        <div className="text-base leading-6">
          <p className="font-bold">1. Paid One-Year Access to Online Nursing Study Courses Includes:</p>
          <ul className="list-disc ml-8 my-6">
            <li>2900+ Total Questions & Rationales</li>
            <li>Self-paced Full-length Crash Course Videos on All Topics</li>
            <li>800+ NGN Questions</li>
            <li>Multiple Assessments + Pass Prediction</li>
            <li>Multiple NCLEX CAT Mock Tests</li >
            <li>Baseline Assessment Test</li>
            <li>Printable Handouts/Notes (about 250 pages)</li>
          </ul>
          <p className="font-bold">2. Full Payment for One-Time Attempt at the Actual CGFNS Exam</p>
          <p className="font-bold">3. Full Payment for CGFNS Certificate Program</p>
        </div>
      }
      imageSrc="/services/illustration-2.svg"
      reverse
    />
    <ServiceCard
      number={3}
      title="Study and pass NCLEX"
      description={
        <ul className="list-decimal text-base leading-6 ml-4">
          <li>Full payment for one NCLEX exam</li>
          <li>Full accommodation for one week for the NCLEX exam in the U.S.or any other country(traveling tickets not included)</li>
          <li>Free RN licenses in 42 states after passing the NCLEX exam</li>
        </ul>
      }
      imageSrc="/services/illustration-3.svg"
    />
    <ServiceCard
      number={4}
      title="Get your green card"
      description={
        <ul className="list-decimal text-base leading-6 ml-4">
          <li>Full payment for Visa Screen application</li>
          <li> Job offer(s) for RN positions in the U.S.</li>
          <li>Preparation of all immigration papers for you and your family</li>
          <li>Submission of all papers to a U.S. immigration attorney (attorney and processing fees not included)</li>
          <li>Assistance with relocation logistics (details discussed before arrival)</li>
        </ul>
      }
      imageSrc="/services/illustration-4.svg"
      reverse
    />
  </section>
}

const ServicesPage = () => {
  return (
    <>
      <header className="flex flex-col items-center py-20 w-full text-center bg-cyan-700 gap-8" >
        <div className="w-full md:max-w-3xl xl:max-w-6xl px-5 mx-auto">
          <h1 className="text-xl font-semibold leading-10 text-white">
            Ready to work in the United States?
          </h1>
          <p className="text-3xl font-extrabold leading-10 text-white">
            AWES is your go-to company for immigration to the United States, helping you obtain green cards for you and your family
          </p>
        </div>
        <CallToAction />
      </header >
      <main>
        <ServicesList />
        <section className="w-full my-12 xl:my-28 px-5">
          <div className="relative mx-auto my-16 xl:my-28 w-full md:max-w-3xl xl:max-w-6xl rounded-2xl">
            <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d6a02b4efb2f51ae6f7b6d1a2f8e3e4908ea2b4f964f543f19b64e0be987ab2?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="Call To Action"
              className="object-cover rounded-2xl" fill />
            <div className="relative bg-black bg-opacity-30 flex flex-col items-center justify-center gap-16 rounded-2xl md:gap-10 xl:gap-5 gap grow px-8 min-h-[411px]">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide text-white leading-10 md:leading-[56px] text-center">
                Your dream nursing career away in US is just a click away
              </h2>
              <CallToAction />
            </div>
          </div>
        </section>
      </main >
    </>
  );
}

export default ServicesPage;
