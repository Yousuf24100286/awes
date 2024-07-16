const NavItem = ({ children, isButton = false }: { children: React.ReactNode; isButton?: boolean }) => {
  if (isButton) {
    return (
      <button className="justify-center self-stretch px-6 py-2.5 font-bold text-white bg-pink-900 rounded-lg max-md:px-5">
        {children}
      </button>
    );
  }
  return <div className="self-stretch my-auto">{children}</div>;
};

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

const SocialIcon = ({ src, alt }: { src: string; alt: string }) => (
  <img loading="lazy" src={src} alt={alt} className="shrink-0 w-6 aspect-square" />
);

function ServicesPage() {
  return (
    <div className="flex flex-col items-center bg-stone-50">
      <header className="flex flex-col items-center self-stretch px-5 pb-20 w-full text-center bg-cyan-700 max-md:max-w-full">
        <nav className="flex justify-center items-center self-stretch px-16 py-2 w-full text-base leading-6 bg-white text-slate-950 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between w-full max-w-[1147px] max-md:flex-wrap max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fb439bc00bfe9602963f25626815197a94140d2c633f7e9155b4963a45e9c72?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="Company Logo" className="shrink-0 max-w-full aspect-[3.45] w-[207px]" />
            <div className="flex gap-5 justify-between items-center my-auto">
              <NavItem>Home</NavItem>
              <NavItem>Services</NavItem>
              <NavItem>About us</NavItem>
              <NavItem isButton>Apply now</NavItem>
            </div>
          </div>
        </nav>
        <h1 className="mt-32 text-xl font-semibold leading-10 text-white max-md:mt-10">
          Ready to work in the United States?
        </h1>
        <p className="mt-4 mb-10 text-3xl font-extrabold leading-10 text-white w-[1021px] max-md:max-w-full">
          AWES is your go-to company for immigration to the United States, helping you obtain green cards for you and your family
        </p>
      </header>

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

        <section className="flex overflow-hidden relative flex-col justify-center px-px mt-32 w-full text-center max-w-[1146px] min-h-[411px] max-md:mt-10 max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d6a02b4efb2f51ae6f7b6d1a2f8e3e4908ea2b4f964f543f19b64e0be987ab2?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="" className="object-cover absolute inset-0 size-full" />
          <div className="flex relative flex-col px-20 py-20 rounded-3xl bg-slate-950 bg-opacity-30 max-md:px-5 max-md:max-w-full">
            <h2 className="mt-14 text-5xl font-extrabold tracking-wide text-white leading-[56px] max-md:mt-10 max-md:max-w-full">
              Your dream nursing career away in US is just a click away
            </h2>
            <button className="justify-center self-center px-4 py-2.5 mt-4 text-base font-bold leading-6 text-white bg-pink-900 rounded-lg shadow-sm">
              Apply now
            </button>
          </div>
        </section>
      </main>

      <footer className="flex flex-col items-center self-stretch pt-11 pb-7 mt-32 w-full bg-teal-800 max-md:mt-10 max-md:max-w-full">
        <div className="w-full max-w-[1117px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col px-5 text-sm leading-5 text-white max-md:mt-10">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3b766a1a17d2cc9dac99bf958b97a724769b15111c0dc04daa2252b0a63b842?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="Company Logo" className="aspect-[3.45] w-[207px]" />
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
                      Subscribe to stay tuned for new and latest updates. Let&pos;s do it!
                    </p>
                    <p className="text-base font-medium leading-6">Follow us</p>
                  </div>
                  <div className="flex gap-2 self-end px-5 mt-3.5">
                    <SocialIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/2798a8e477ff83a1f5d516dcc9a6e6c79f1e764ffe07b89c30b72ec65b8819df?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="Facebook" />
                    <SocialIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/321396f3344b7950cffce5bfbe136e4b8c19b4cef208115bab67f1523d10d5a0?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="Twitter" />
                    <SocialIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d30f5076bd67ae170d29982e6fef27bc496a388b3af07bb6b7fe4c01f9d9f44?apiKey=37e9b177900140c9be4212bdea99ec1b&" alt="Instagram" />
                  </div>
                  <form className="flex gap-3 mt-1 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col flex-1 justify-center text-sm leading-5 text-slate-950 text-opacity-30 max-md:max-w-full">
                      <label htmlFor="email" className="sr-only">Enter your email Address</label>
                      <input
                        type="email"
                        id="email"
                        className="justify-center items-start px-2.5 py-4 bg-white rounded-xl shadow-lg max-md:pr-5 max-md:max-w-full"
                        placeholder="Enter your email Address"
                      />
                    </div>
                    <button className="justify-center px-4 py-2.5 text-base font-bold leading-6 text-center text-white whitespace-nowrap bg-pink-900 rounded-lg">
                      Subscribe
                    </button>
                  </form>
                </div>
                <div className="flex flex-col self-start px-5">
                  <p className="text-base font-medium leading-6 text-white">Call us</p>
                  <p className="mt-5 text-sm leading-5 text-white">+1 800 854-36-80</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch mt-32 w-full bg-white border border-white border-solid min-h-[1px] max-md:mt-10 max-md:max-w-full" />
        <div className="flex gap-5 px-5 mt-8 w-full text-sm leading-5 text-white max-w-[1157px] max-md:flex-wrap max-md:max-w-full">
          <p className="flex-auto my-auto">© 2021 All Rights Reserved</p>
          <div className="flex gap-5 justify-between max-md:flex-wrap">
            <a href="#" className="text-white hover:underline">Privacy Policy</a>
            <a href="#" className="text-white hover:underline">Terms of Use</a>
            <a href="#" className="text-white hover:underline">Sales and Refunds</a>
            <a href="#" className="text-white hover:underline">Legal</a>
            <a href="#" className="text-white hover:underline">Site Map</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

