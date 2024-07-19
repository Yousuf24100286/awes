"use client";

import * as z from "zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Step2Schema } from "@/schemas/application";
import {
  Form
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { FileInput } from "@/components/FileInput";
import { step2 } from "@/actions/application/step2";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCurrentUser } from "@/hooks/use-current-user";
import ProtectStep from "@/components/auth/protect-step";

const StepHeader = ({ step }: { step: number }) => {
  return (
    <div className="grid gap-2">
      <h2 className="text-xl font-bold">
        Application Homepage
      </h2>
      <p className="">
        Fill out the basic information  and upload necessary documents and we will reach out to you for  detailed guidance for
        next steps.</p>
      <div className="flex h-14 w-full rounded-2xl bg-[#19615C] items-center px-14">
        <div className="text-white font-bold text-xl">
          Step {step}:
        </div>
        <div className="flex-grow" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={26}
          height={26}
          viewBox="0 0 26 26"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.00604 8.4375C6.00604 4.81314 8.98269 1.875 12.6545 1.875C15.7512 1.875 18.3556 3.96553 19.0936 6.79618C19.2244 7.2976 19.7422 7.59947 20.2502 7.47042C20.7583 7.34135 21.064 6.83025 20.9333 6.32883C19.9844 2.68988 16.639 0 12.6545 0C7.93358 0 4.10647 3.7776 4.10647 8.4375V11.0058C2.69477 11.1099 1.77545 11.3725 1.10347 12.0359C-0.00927734 13.1343 -0.00927734 14.902 -0.00927734 18.4375C-0.00927734 21.973 -0.00927734 23.7408 1.10347 24.8391C2.21621 25.9375 4.00714 25.9375 7.58902 25.9375H17.7201C21.3019 25.9375 23.0928 25.9375 24.2056 24.8391C25.3184 23.7408 25.3184 21.973 25.3184 18.4375C25.3184 14.902 25.3184 13.1343 24.2056 12.0359C23.0928 10.9375 21.3019 10.9375 17.7201 10.9375H7.58902C7.01723 10.9375 6.49108 10.9375 6.00604 10.942V8.4375ZM15.1873 18.4375C15.1873 19.8183 14.0534 20.9375 12.6545 20.9375C11.2557 20.9375 10.1218 19.8183 10.1218 18.4375C10.1218 17.0568 11.2557 15.9375 12.6545 15.9375C14.0534 15.9375 15.1873 17.0568 15.1873 18.4375Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  )
};

export const Step2Form = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const user = useCurrentUser();

  const form = useForm<z.infer<typeof Step2Schema>>({
    resolver: zodResolver(Step2Schema),
    defaultValues: {
      nationalId: user?.application?.nationalId || '',
      passportPhoto: user?.application?.passportPhoto || '',
      passportId: user?.application?.passportId || '',
      nursingSchoolDiploma: user?.application?.nursingSchoolDiploma || '',
      nursingSchoolTranscript: user?.application?.nursingSchoolTranscript || '',
      nursingExperienceCertificate: user?.application?.nursingExperienceCertificate || '',
    }
  });


  const onSubmit = (values: z.infer<typeof Step2Schema>) => {
    toast.info("Uploading documents...");
    console.log('values', values)

    startTransition(() => {
      step2(values)
        .then((data) => {
          if (data.success)
            toast.success(data.success);
          if (data.error)
            toast.error(data.error);
          router.push("/application");
        })
        .catch((error) => {
          console.error(error);
          toast.error("An error occurred. Please try again.");
        })
    });
  };

  return (
    <Card className="bg-[#FFFCF7] w-full">
      <ProtectStep step="STEP_2" />
      <CardContent className="p-10 grid gap-6">
        <StepHeader step={2} />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 flex flex-col max-w-2xl"
          >
            <div className="space-y-4">
              <FileInput id="nationalId" label="National ID / State ID" required />
              <FileInput id="passportPhoto" label="Photo (Passport Size)" required />
              <FileInput id="passportId" label="Passport ID" />
              <FileInput id="nursingSchoolDiploma" label="Nursing School Diploma" required />
              <FileInput id="nursingSchoolTranscript" label="Nursing School Subjects / Grades Transcript" />
              <FileInput id="nursingExperienceCertificate" label="Nursing Experience Certificate" />
            </div>
            <div className="flex gap-2 self-end">
              <Button
                variant='outline'
                className="w-48"
                asChild
              >
                <Link href="/application/step-1">
                  Back
                </Link>
              </Button>
              <Button
                disabled={isPending}
                type="submit"
                variant="brand"
                size="brand"
                className="w-48 bg-[#7E1D38]"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
