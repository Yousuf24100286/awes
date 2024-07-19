const AuthLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <main className='flex flex-col h-full'>
      <section className="flex justify-center grow bg-teal-800 w-full">
        <div className="lg:grow lg:w-1/2 lg:bg-[#FEFAEB] lg:my-4 lg:rounded-e-3xl rounded-lg py-8">
          <div className="flex flex-col justify-center max-w-xl h-full w-full lg:ml-auto lg:pl-5 px-8 lg:px-0 gap-8">
            {children}
          </div>
        </div>
        <div className="hidden lg:flex items-center grow w-1/2">
          <div className="max-w-xl w-full mr-autop pr-5">
            <div className='flex justify-end w-full h-[370px]'>
              <img loading="lazy" src="/auth-illustration.png" alt="Auth Illustration" className="w-[454px] aspect-[1.23]" />
            </div>
          </div>
        </div>
      </section>
    </main >

  );
}

export default AuthLayout;