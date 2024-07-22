import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { getUserApplication } from "@/data/application";
import Link from "next/link";

const StepHeader = async () => {
  const user = await getUserApplication();

  if (!user) {
    return null;
  }

  const step = user.application?.applicationStep === 'NOT_ALLOWED' ? 'Not Allowed' :
    user.application?.applicationStep === 'STEP_1' ? 'step-1' :
      user.application?.applicationStep === 'STEP_2' ? 'step-2' :
        user.application?.applicationStep === 'STEP_3' ? 'step-3' :
          user.application?.applicationStep === 'COMPLETED' ? 'Completed' : 'Not Allowed';

  return (
    <div className="grid gap-8">
      <div className="grid gap-2">
        <h2 className="text-xl font-bold">
          Account Homepage
        </h2>
        <p>
          Welcome to the AWES application portal. You are just a few steps away from your dream career in the United States.
        </p>
      </div>
      <div className="grid gap-8 mx-auto max-w-2xl">
        <div className="grid gap-6 bg-[#19615C] px-8 py-6 rounded-2xl">
          <h2 className="text-white font-bold text-xl">
            Start the application to access the complete functionality
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-center w-max mx-auto">
            <Dialog defaultOpen>
              <DialogTrigger>
                <Button variant='outline' className="bg-transparent text-white px-10">Read instructions</Button>
              </DialogTrigger>
              <DialogContent>
                <article className="mx-auto prose overflow-y-auto">
                  <h2 className="text-center">Read instructions</h2>
                  <ol>
                    <li>Please put your name  in English exactly as it appears in your nursing school documents and nursing license</li>
                    <li>Provide documents in PDF format if you can.</li>
                    <li>High School Diploma and Grades are required  if you graduated from high school less than 10 years ago.</li>
                    <li>if you want to upload more documents, you could email it to us
                      {' '}
                      <a href="mailto:contact@awes.us">contact@awes.us</a>
                    </li>
                  </ol>
                </article>
              </DialogContent>
            </Dialog>
            <Button variant='brand' className="px-10"
              disabled={step === 'Not Allowed' || step === 'Completed'}
              asChild={step !== 'Not Allowed' && step !== 'Completed'}
            >
              <Link
                href={`/application/${step}`}
              >
                {step === 'Not Allowed' || step === 'Completed' ? step : 'Continue Application'}
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-between flex-col sm:flex-row gap-8 sm:gap-0">
          <div className="grid gap-4 px-5 py-7 rounded-2xl border-2 border-[#04092152] w-full sm:w-[calc(50%_-_8px)]">
            <div className="flex items-center font-bold text-xl gap-8">
              <span>
                Application Status:
              </span>
              <span className="text-[#19615C] whitespace-nowrap">
                {step !== 'Not Allowed' && step !== 'Completed' ? 'In Progress' : step}
              </span>
            </div>
          </div>
          <div className="grid gap-4 px-5 py-7 rounded-2xl border-2 border-[#04092152] w-full sm:w-[calc(50%_-_8px)]">
            <div className="flex items-center font-bold text-xl justify-between">
              <span className="whitespace-nowrap">Accessible steps:</span>
              <span className="text-[#19615C] whitespace-nowrap">{step}</span>
            </div>
          </div>
        </div>
        <div className="grid gap-4 py-7 rounded-2xl border-2 border-[#04092152]">
          <h3 className="whitespace-nowrap font-bold text-xl px-5">Remarks:</h3>
          <Separator className="bg-[#04092152] h-px" />
          <p className="font-normal text-base px-5">{user.application?.feedback}</p>
        </div>
      </div>
    </div>
  )
};

const ApplicationPage = () => {
  return (
    <Card className="bg-[#FFFCF7] w-full">
      <CardContent className="p-10 grid gap-6">
        <StepHeader />
      </CardContent>
    </Card>

  );
}

export default ApplicationPage;