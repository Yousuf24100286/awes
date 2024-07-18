import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getApplicationStep } from "@/data/application";
import Link from "next/link";

const StepHeader = async () => {
  const data = await getApplicationStep();

  if (!data) {
    return null;
  }

  const steps = data.applicationStep === 'STEP_1' ? 1 : data.applicationStep === 'STEP_2' ? 2 : 3;

  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <h2 className="text-xl font-bold">
          Application
        </h2>
        <p>
          Fill out the basic information  and upload necessary documents and we will reach out to you for  detailed guidance for
          next steps.
        </p>
      </div>
      <div className="rounded-2xl bg-[#19615C] px-14 py-8">
        {
          Array.from({ length: steps }, (_, i) => i + 1).map((s, index) => (
            <div
              key={s}
            >
              {
                index != 0 && (
                  <div className="h-px w-full bg-white my-4" />
                )
              }
              <div className="flex items-center">
                <div className="text-white font-bold text-xl">
                  Step {s}:
                </div>
                <div className="flex-grow" />
                <Button
                  variant='ghost'
                  className="text-white font-bold text-xl"
                >
                  <Link href={`/application/step-${s}`}
                  >
                    Apply
                  </Link>
                </Button>
              </div>
            </div>
          ))
        }
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