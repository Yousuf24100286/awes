"use client";

import * as z from "zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { RegisterSchema } from "@/schemas/auth";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { register } from "@/actions/auth/register";
import { CardWrapper } from "./card-wrapper";
import { TextInput } from "@/components/TextInput";
import { toast } from "sonner";
import Link from "next/link";

export const RegisterForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    startTransition(() => {
      register(values)
        .then((data) => {
          if (data?.error)
            toast.error(data?.error);
          if (data?.success)
            toast.success(data?.success);
        });
    });
  };

  return (
    <>
      <div className="w-[400px] grid gap-2">
        <h2 className="text-3xl text-center font-extrabold text-white lg:text-jelly-bean">
          Sign up
        </h2>
        <p className="text-sm text-center text-white lg:text-[#0409219E]">
          Please enter relevant details for sign up
        </p>
      </div>
      <CardWrapper>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2"
          >
            <div>
              <TextInput id="name" label="Name" required />
              <TextInput id="email" label="Email" type="email" required />
              <TextInput id="password" label="Password" type="password" required />
            </div>
            <div className="space-y-4">

              <Button
                disabled={isPending}
                type="submit"
                variant="brand"
                className="w-full"
              >
                Sign up
              </Button>
              <div className="flex items-center justify-center gap-1.5 text-sm">
                <p>Already have an account?</p>
                <Link href="/auth/login" className="text-[#4F46E5] hover:text-[#4F46E5]/80 font-medium">
                  Sign in
                </Link>
              </div>
            </div>
          </form>
        </Form>
      </CardWrapper>
    </>
  );
};
