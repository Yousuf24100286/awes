import ContactForm from "@/components/ContactForm";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section className="bg-white xl:bg-[#FEFAEB] w-full">
      <div className="mx-auto md:max-w-3xl xl:max-w-6xl px-5 py-16 space-y-16">
        <h2 className="text-center text-5xl font-extrabold tracking-wide text-cyan-700 leading-[55.86px]">
          Contact us
        </h2>
        <div className="self-center px-12 py-8 bg-white rounded-xl border border-solid shadow-sm border-slate-300 mb-10">
          <div className="flex items-center justify-between gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-1/2 max-md:ml-0 max-md:w-full">
              <ContactForm />
            </div>
            <div className="hidden md:flex flex-col text-sm leading-5 text-center text-slate-950 max-md:mt-10 max-w-[374px]">
              <div className="relative w-[374px] h-[220px]">
                <Image loading="lazy" src="/contact-us-illustration.png" fill alt="Customer support illustration" />
              </div>
              <p className="self-center mt-8">
                Need help with anything? <br />
                No worries, we&apos;ve got your back! Our technical experts are here for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

const AboutUsPage = () => {
  return (
    <>
      <header className="flex flex-col pb-4 md:pb-16 bg-teal-800 pt-14 w-full">
        <div className="mx-auto md:max-w-3xl xl:max-w-6xl px-5">
          <div className="flex gap-5 flex-col md:flex-row md:justify-between">
            <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col my-auto text-white max-md:mt-10 gap-10">
                <h1 className="text-3xl font-extrabold leading-10">
                  Genuine people, real impact.
                </h1>
                <p className="text-sm leading-5">
                  We are a group of dedicated nurses and healthcare professionals in the United States, and many of us are immigrants ourselves. With a combined experience of over 95 years in the U.S. healthcare system, we have partnered with U.S. immigration attorneys and professional healthcare recruiters to provide you with the comprehensive services you deserve. We are your trusted partner all the way until you and your family settle in and embrace the American dream.
                </p>
              </div>
            </div>
            <div className="relative w-full h-[357px] md:w-[353px] md:h-[331px] xl:w-[496px] xl:h-[396px] ">
              <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d90fae94c84602dc4697645a6ab5560eb695b1638447f25291479a9bfeab82d7?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="Healthcare professionals" fill />
            </div>
          </div>
        </div>
      </header>
      <ContactSection />
    </>
  );
}

export default AboutUsPage;
