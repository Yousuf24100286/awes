import CallToAction from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ServiceCard = ({ title, description, imageSrc }: { title: string; description: React.ReactNode; imageSrc: string }) => (
  <section className="mt-32 w-full max-w-[1186px] max-md:mt-10 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow px-5 mt-2 max-md:mt-10 max-md:max-w-full">
          <h2 className="text-3xl font-extrabold leading-10 text-cyan-700 max-md:max-w-full">
            {title}
          </h2>
          <div className="mt-6 text-sm leading-5 text-black max-md:max-w-full">
            {description}
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
        <img loading="lazy" src={imageSrc} alt="" className="w-full aspect-[1.16] max-md:mt-10 max-md:max-w-full" />
      </div>
    </div>
  </section>
);

const ServicesPage = () => {
  return (
    <>
      <header className="flex flex-col items-center self-stretch px-5 pb-20 w-full text-center bg-cyan-700 max-md:max-w-full" >
        <h1 className="mt-32 text-xl font-semibold leading-10 text-white max-md:mt-10">
          Ready to work in the United States?
        </h1>
        <p className="mt-4 mb-10 text-3xl font-extrabold leading-10 text-white w-[1021px] max-md:max-w-full">
          AWES is your go-to company for immigration to the United States, helping you obtain green cards for you and your family
        </p>
      </header >
      <main>
        <ServiceCard
          title="Study and pass TOEFL iBT"
          description={
            <>
              <span className="text-base font-bold leading-6">1. Paid 6-Month Access Includes:</span>
              <br />
              <ul>
                <li><span className="text-base leading-6">1500+ practice questions</span></li>
                <li><span className="text-base leading-6">2000+ commonly used vocabulary words</span></li>
                <li><span className="text-base leading-6">Friendly and helpful customer support</span></li>
                <li><span className="text-base leading-6">200+ hours of lessons and content</span></li>
                <li><span className="text-base leading-6">Interactive vocabulary exercises and flashcards</span></li>
                <li><span className="text-base leading-6">Best online practice test: 20 full-length 3-hour simulation practice tests</span></li>
                <li><span className="text-base leading-6">Complete diagnostic reports showing strengths, weaknesses, scores, and feedback for all 20 full-length practice tests</span></li>
                <li><span className="text-base leading-6">Personalized study plan based on your test results and 1-on-1 instant messaging with a teacher to help improve your understanding throughout your preparation course</span></li>
              </ul>
              <br />
              <span className="text-base font-bold leading-6">2. Full Payment for One-Time Attempt for Actual TOEFL iBT Test</span>
            </>
          }
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d58b05bb-a4e7-44e8-9905-cef871c2fd5e?apiKey=37e9b177900140c9be4212bdea99ec1b&"
        />

        <section className="mt-32 w-full max-w-[1179px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0745ce97-3bc5-42c4-86ef-626131b4ef49?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="" className="grow w-full aspect-[1.04] max-md:mt-10" />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
                <h2 className="text-3xl font-extrabold leading-10 text-cyan-700 max-md:max-w-full">
                  Study and pass CGFNS certificate <br /> program
                </h2>
                <div className="mt-6 text-base font-bold leading-6 text-black max-md:max-w-full">
                  1. Paid One-Year Access to Online Nursing Study Courses Includes:
                  <br />
                  <ul>
                    <li>2900+ Total Questions & Rationales</li>
                    <li>Self-paced Full-length Crash Course Videos on All Topics</li>
                    <li>800+ NGN Questions</li>
                    <li>Multiple Assessments + Pass Prediction</li>
                    <li>Multiple NCLEX CAT Mock Tests</li>
                    <li>Baseline Assessment Test</li>
                    <li>Printable Handouts/Notes (about 250 pages)</li>
                  </ul>
                  <br />
                  2. Full Payment for One-Time Attempt at the Actual CGFNS Exam
                  <br />
                  3. Full Payment for CGFNS Certificate Program
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceCard
          title="Study and pass NCLEX"
          description={
            <>
              Full payment for one NCLEX exam
              <br />
              Full accommodation for one week for the NCLEX exam in the U.S. or any other country (traveling tickets not included)
              <br />
              Free RN licenses in 42 states after passing the NCLEX exam
            </>
          }
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/3c8e51d2-5deb-4a46-adde-56e517dae074?apiKey=37e9b177900140c9be4212bdea99ec1b&"
        />

        <section className="mt-32 w-full max-w-[1143px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center px-1.5 py-12 w-full bg-amber-100 rounded-3xl shadow-sm max-md:mt-10">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/64862851295914ad1688bfee4eb8904c8998c360d50311717c9796779ed3e717?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="" className="w-full aspect-[1.52]" />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
                <h2 className="text-3xl font-extrabold leading-10 text-cyan-700 max-md:max-w-full">
                  Get your green card
                </h2>
                <div className="mt-6 text-base leading-6 text-black max-md:max-w-full">
                  Full payment for Visa Screen application
                  <br />
                  Job offer(s) for RN positions in the U.S.
                  <br />
                  Preparation of all immigration papers for you and your family
                  <br />
                  Submission of all papers to a U.S. immigration attorney (attorney and processing fees not included)
                  <br />
                  Assistance with relocation logistics (details discussed before arrival)
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full my-28 px-5">
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
      </main>
    </>
  );
}

export default ServicesPage;
