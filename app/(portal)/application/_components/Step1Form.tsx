"use client";

import * as z from "zod";
import { useTransition } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Step1Schema } from "@/schemas/application";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarComponent } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { FileInput } from "@/components/FileInput";
import { TextInput } from "@/components/TextInput";
import { step1 } from "@/actions/application/step1";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCurrentUser } from "@/hooks/use-current-user";
import ProtectStep from "@/components/auth/protect-step";

/**
 * Calendar component has been updated: https://github.com/Octaviocossy/shadcn-ui-better-date-picker
 */
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

export const Step1Form = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const user = useCurrentUser();

  const form = useForm<z.infer<typeof Step1Schema>>({
    resolver: zodResolver(Step1Schema),
    defaultValues: {
      name: user?.application?.name || '',
      dateOfBirth: undefined,
      // dateOfBirth: user?.application?.dateOfBirth ? user.application.dateOfBirth : undefined,
      phoneNumber: user?.application?.phoneNumber || '',
      email: user?.application?.email || '',
      emergencyContactName: user?.application?.emergencyContactName || '',
      emergencyContactEmail: user?.application?.emergencyContactEmail || '',
      emergencyContactNumber: user?.application?.emergencyContactNumber || '',
      nationalIdCard: user?.application?.nationalIdCard || '',
      passport: user?.application?.passport || '',
      nursingLicense: user?.application?.nursingLicense || '',
      nursingDegree: user?.application?.nursingDegree || '',
      nursingSchoolTranscript: user?.application?.nursingSchoolTranscript || '',
      highSchoolDiploma: user?.application?.highSchoolDiploma || '',
      highSchoolGrades: user?.application?.highSchoolGrades || '',
      curriculumVitae: user?.application?.curriculumVitae || '',
    }
  });

  const onSubmit = (values: z.infer<typeof Step1Schema>) => {
    toast.info("Uploading documents...");
    console.log('values', values)

    startTransition(() => {
      step1(values)
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
      <ProtectStep step="STEP_1" />
      <CardContent className="p-10 grid gap-6">
        <StepHeader step={1} />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 flex flex-col max-w-2xl"
          >
            <div className="space-y-6">
              <Section1 />
              <Separator />
              <Section2 />
              <Separator />
              <Section3 />
            </div>
            <div className="flex gap-2 self-end">
              <Button
                variant='outline'
                className="w-48"
                asChild
              >
                <Link href="/application">
                  Back
                </Link>
              </Button>
              <Button
                disabled={isPending}
                type="submit"
                variant="brand"
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

function Section1() {
  const form = useFormContext();
  const { getFieldState, formState } = form;
  const fieldState = getFieldState('dateOfBirth', formState);

  return (
    <div className="space-y-2">
      <div className="flex gap-16">
        <TextInput id="name" label="Name" required />
        <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem className="w-full pt-1">
              <div className="flex flex-col gap-1">
                <FormLabel>Date of birth<span className="text-destructive">*</span></FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                          , fieldState.error ? "border-destructive" : "")}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon
                          className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="flex gap-16">
        <TextInput id="phoneNumber" label="Phone Number" required />
        <TextInput id="email" label="Email" type="email" required />
      </div>
    </div>
  )
}

function Section2() {
  return (
    <div className="space-y-2">
      <div className="flex gap-16">
        <TextInput id="emergencyContactName" label="Emergency Contact Name" required />
        <TextInput id="emergencyContactEmail" label="Emergency Contact Email" type="email" required />
      </div>
      <TextInput id="emergencyContactNumber" label="Emergency Phone Number" className="w-[calc(50%_-_2rem)]" required />
    </div>
  )
}

function Section3() {
  return (
    <div className="space-y-4">
      <FileInput id="nationalIdCard" label="National ID Card" required />
      <FileInput id="passport" label="Passport" />
      <FileInput id="nursingLicense" label="Nursing License" required />
      <FileInput id="nursingDegree" label="Nursing Degree" required />
      <FileInput id="nursingSchoolTranscript" label="Nursing School Subjects / Grades Transcript" />
      <FileInput id="highSchoolDiploma" label="High School Diploma" />
      <FileInput id="highSchoolGrades" label="High School Grades" />
      <FileInput id="curriculumVitae" label="Curriculum Vitae" />
    </div>
  )
}
