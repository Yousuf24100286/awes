"use client";

import * as z from "zod";
import { useTransition } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Step1Schema } from "@/schemas/application";
import { Input } from "@/components/ui/input";
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
import { format, parse } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { FileInput } from "@/components/FileInput";
import { step1 } from "@/actions/application/step1";

export const Step1Form = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof Step1Schema>>({
    resolver: zodResolver(Step1Schema),
  });


  const onSubmit = (values: z.infer<typeof Step1Schema>) => {
    startTransition(() => {
      step1(values)
        .then((data) => {
          toast.error(data.error);
          toast.success(data.success);
        });
    });
  };

  return (
    <Card className="bg-[#FFFCF7] my-8 w-4/5 ml-auto">
      <CardContent className="p-10">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="space-y-5">
              <Section1 />
              <Separator />
              <Section2 />
              <Separator />
              <Section3 />
            </div>
            <Button
              disabled={isPending}
              type="submit"
              className="w-48 bg-[#7E1D38]"
            >
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

function Section1() {
  const form = useFormContext();

  return (
    <>
      <div className="flex gap-16">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 pt-1 w-full">
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(parse(field.value, "yyyy-MM-dd", new Date()), "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon
                        className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value ? parse(field.value, "yyyy-MM-dd", new Date()) : undefined}
                    onSelect={(date) => field.onChange(date ? format(date, "yyyy-MM-dd") : "")}
                    disabled={(date) => date > new Date()}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="flex gap-16">
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  )
}

function Section2() {
  const form = useFormContext();

  return (
    <>
      <div className="flex gap-16">
        <FormField
          control={form.control}
          name="emergencyContactName"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Emergency Contact Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="emergencyContactEmail"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Emergency Contact Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name="emergencyContactNumber"
        render={({ field }) => (
          <FormItem className="w-[calc(50%_-_2rem)]">
            <FormLabel>Emergency Phone Number</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}

function Section3() {
  return (
    <>
      <FileInput id="nationalIdCard" label="National ID Card" />
      <FileInput id="passport" label="Passport" />
      <FileInput id="nursingLicense" label="Nursing License" />
      <FileInput id="nursingDegree" label="Nursing Degree" />
      <FileInput id="highSchoolDiploma" label="High School Diploma" />
      <FileInput id="highSchoolGrades" label="High School Grades" />
      <FileInput id="curriculumVitae" label="Curriculum Vitae" />
    </>
  )
}
