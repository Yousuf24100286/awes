const SocialIcon = ({ src, alt }: { src: string, alt: string }) => (
  <img loading="lazy" src={src} className="shrink-0 w-6 aspect-square" alt={alt} />
);

const NavItem = ({ children }: { children: React.ReactNode }) => (
  <div className="self-stretch my-auto">{children}</div>
);

const FooterLink = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);

export default function AboutUsPage() {
  const navItems = ["Home", "Services", "About us"];
  const footerLinks = ["Privacy Policy", "Terms of Use", "Sales and Refunds", "Legal", "Site Map"];
  const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2798a8e477ff83a1f5d516dcc9a6e6c79f1e764ffe07b89c30b72ec65b8819df?apiKey=37e9b177900140c9be4212bdea99ec1b&", alt: "Facebook icon" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/321396f3344b7950cffce5bfbe136e4b8c19b4cef208115bab67f1523d10d5a0?apiKey=37e9b177900140c9be4212bdea99ec1b&", alt: "Twitter icon" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f729f72aec7380b73b87bd6c35d8fe93e314442f4ac4e3887f41caf97ebd92f2?apiKey=37e9b177900140c9be4212bdea99ec1b&", alt: "Instagram icon" }
  ];

  return (
    <div className="flex flex-col bg-amber-50">
      <header className="flex flex-col pb-16 w-full bg-teal-800 max-md:max-w-full">
        <div className="flex justify-center items-center px-16 py-2 w-full text-base leading-6 text-center bg-white text-slate-950 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between w-full max-w-[1147px] max-md:flex-wrap max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fb439bc00bfe9602963f25626815197a94140d2c633f7e9155b4963a45e9c72?apiKey=37e9b177900140c9be4212bdea99ec1b&" className="shrink-0 max-w-full aspect-[3.45] w-[207px]" alt="Company logo" />
            <nav className="flex gap-5 justify-between items-center my-auto">
              {navItems.map((item, index) => (
                <NavItem key={index}>{item}</NavItem>
              ))}
              <button className="justify-center self-stretch px-6 py-2.5 font-bold text-white bg-pink-900 rounded-lg max-md:px-5">
                Apply now
              </button>
            </nav>
          </div>
        </div>
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
      <footer className="flex flex-col items-center pt-11 pb-7 mt-32 w-full bg-teal-800 max-md:mt-10 max-md:max-w-full">
        <div className="w-full max-w-[1117px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col px-5 text-sm leading-5 text-white max-md:mt-10">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3b766a1a17d2cc9dac99bf958b97a724769b15111c0dc04daa2252b0a63b842?apiKey=37e9b177900140c9be4212bdea99ec1b&" className="aspect-[3.45] w-[207px]" alt="Company logo" />
                <p className="mt-11 max-md:mt-10">
                  We are a leading technology agency specializing in innovative solutions, including process automation, custom software development, and IT consultation.
                </p>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-9/12 max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-5 mt-28 max-md:flex-wrap max-md:mt-10">
                <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                  <div className="flex gap-5 text-white max-md:flex-wrap max-md:max-w-full">
                    <p className="flex-auto text-sm leading-5 max-md:max-w-full">
                      Subscribe to stay tuned for new and latest updates. Let&apos;s do it!
                    </p>
                    <h3 className="text-base font-medium leading-6">Follow us</h3>
                  </div>
                  <div className="flex gap-2 self-end px-5 mt-3.5">
                    {socialIcons.map((icon, index) => (
                      <SocialIcon key={index} src={icon.src} alt={icon.alt} />
                    ))}
                  </div>
                  <form className="flex gap-3 mt-1 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col flex-1 justify-center text-sm leading-5 text-slate-950 text-opacity-30 max-md:max-w-full">
                      <input
                        type="email"
                        placeholder="Enter your email Address"
                        className="justify-center items-start px-2.5 py-4 bg-white rounded-xl shadow-lg max-md:pr-5 max-md:max-w-full"
                        aria-label="Enter your email Address"
                      />
                    </div>
                    <button type="submit" className="justify-center px-4 py-2.5 text-base font-bold leading-6 text-center text-white whitespace-nowrap bg-pink-900 rounded-lg">
                      Subscribe
                    </button>
                  </form>
                </div>
                <div className="flex flex-col self-start px-5">
                  <h3 className="text-base font-medium leading-6 text-white">Call us</h3>
                  <p className="mt-5 text-sm leading-5 text-white">+1 800 854-36-80</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch mt-32 w-full bg-white border border-white border-solid min-h-[1px] max-md:mt-10 max-md:max-w-full" />
        <div className="flex gap-5 px-5 mt-8 w-full text-sm leading-5 text-white max-w-[1157px] max-md:flex-wrap max-md:max-w-full">
          <p className="flex-auto my-auto">© 2021 All Rights Reserved</p>
          <nav className="flex gap-5 justify-between max-md:flex-wrap">
            {footerLinks.map((link, index) => (
              <FooterLink key={index}>{link}</FooterLink>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}

