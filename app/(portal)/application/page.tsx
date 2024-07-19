import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getUserApplication } from "@/data/application";
import Link from "next/link";

const StepHeader = async () => {
  const user = await getUserApplication();

  if (!user) {
    return null;
  }

  const step = user.application?.applicationStep === 'STEP_1' ? 1 : user.application?.applicationStep === 'STEP_2' ? 2 : 3;

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
            <Button variant='outline' className="bg-transparent text-white px-10">Read instructions</Button>
            <Button variant='brand' className="px-10" asChild>
              <Link
                href={`/application/step-${step}`}
              >Continue application</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-between flex-col sm:flex-row gap-8 sm:gap-0">
          <div className="grid gap-4 px-5 py-7 rounded-2xl border-2 border-[#04092152] w-full sm:w-[calc(50%_-_8px)]">
            <div className="flex items-center font-bold text-xl gap-8">
              <span>
                Application Status:
              </span>
              <span className="text-[#19615C] whitespace-nowrap">In progress</span>
            </div>
          </div>
          <div className="grid gap-4 px-5 py-7 rounded-2xl border-2 border-[#04092152] w-full sm:w-[calc(50%_-_8px)]">
            <div className="flex items-center font-bold text-xl justify-between">
              <span className="whitespace-nowrap">Accessible steps:</span>
              <span className="text-[#19615C] whitespace-nowrap">Step {step}</span>
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