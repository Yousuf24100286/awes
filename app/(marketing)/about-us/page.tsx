const AboutUsPage = () => {
  return (
    <>
      <header className="flex flex-col pb-16 w-full bg-teal-800 max-md:max-w-full">
        <div className="self-center mt-14 w-full max-w-[1146px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch px-5 my-auto text-white max-md:mt-10 max-md:max-w-full">
                <h1 className="text-3xl font-extrabold leading-10 text-center max-md:max-w-full">
                  Genuine people, real impact.
                </h1>
                <p className="mt-11 text-sm leading-5 max-md:mt-10 max-md:max-w-full">
                  We are a group of dedicated nurses and healthcare professionals in the United States, and many of us are immigrants ourselves. With a combined experience of over 95 years in the U.S. healthcare system, we have partnered with U.S. immigration attorneys and professional healthcare recruiters to provide you with the comprehensive services you deserve. We are your trusted partner all the way until you and your family settle in and embrace the American dream.
                </p>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d90fae94c84602dc4697645a6ab5560eb695b1638447f25291479a9bfeab82d7?apiKey=37e9b177900140c9be4212bdea99ec1b&" className="grow w-full aspect-[1.25] max-md:mt-10 max-md:max-w-full" alt="Healthcare professionals" />
            </div>
          </div>
        </div>
      </header>
      <main>
        <h2 className="self-center mt-16 text-5xl font-extrabold tracking-wide text-cyan-700 leading-[55.86px] max-md:mt-10">
          Contact us
        </h2>
        <section className="self-center px-12 pt-8 pb-20 mt-12 max-w-full bg-white rounded-xl border border-solid shadow-sm border-slate-300 w-[968px] max-md:px-5 max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
              <form className="flex flex-col max-md:mt-10 max-md:max-w-full">
                <label htmlFor="name" className="text-sm font-medium leading-4 text-red-700 max-md:max-w-full">
                  <span className="text-base leading-6 text-slate-950">Name </span>
                  <span className="text-red-700">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  className="justify-center items-start px-3 py-2 mt-1.5 text-sm leading-5 bg-white rounded-md border border-solid border-slate-300 text-slate-950 text-opacity-30 max-md:pr-5 max-md:max-w-full"
                  placeholder="Adam Smith"
                />
                <label htmlFor="email" className="mt-7 text-sm font-medium leading-4 text-red-700 max-md:max-w-full">
                  <span className="text-base leading-6 text-slate-950">Email </span>
                  <span className="text-red-700">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className="justify-center items-start px-3 py-2 mt-1.5 text-sm leading-5 whitespace-nowrap bg-white rounded-md border border-solid border-slate-300 text-slate-950 text-opacity-30 max-md:pr-5 max-md:max-w-full"
                  placeholder="example@email.com"
                />
                <label htmlFor="subject" className="mt-7 text-sm font-medium leading-4 text-red-700 max-md:max-w-full">
                  <span className="text-base leading-6 text-slate-950">Subject </span>
                  <span className="text-red-700">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  className="shrink-0 mt-1.5 h-10 bg-white rounded-md border border-solid border-slate-300 max-md:max-w-full"
                />
                <label htmlFor="message" className="mt-8 text-sm font-medium leading-5 text-red-700 max-md:max-w-full">
                  <span className="text-base leading-6 text-slate-950">Message </span>
                  <span className="text-red-700">*</span>
                </label>
                <textarea
                  id="message"
                  className="flex flex-col justify-center items-end px-3 py-2 mt-1.5 bg-white rounded-md border border-solid border-slate-300 max-md:pl-5 max-md:max-w-full"
                />
                <button type="submit" className="justify-center items-center px-4 py-2.5 mt-10 text-base font-bold leading-6 text-center text-white whitespace-nowrap bg-pink-900 rounded-lg max-md:px-5 max-md:max-w-full">
                  Submit
                </button>
              </form>
            </div>
            <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-24 text-sm leading-5 text-center text-slate-950 max-md:mt-10">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d701e7816494d46e2facfcb01554fb00297315739ea2ed02539911f4a96356b2?apiKey=37e9b177900140c9be4212bdea99ec1b&" className="w-full aspect-[1.69]" alt="Customer support illustration" />
                <p className="self-center mt-8">
                  Need help with anything? <br />
                  No worries, we&apos;ve got your back! Our technical experts are here for you.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutUsPage;
