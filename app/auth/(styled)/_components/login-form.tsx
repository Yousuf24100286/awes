"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

import { LoginSchema } from "@/schemas";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { login } from "@/actions/login";
import { CardWrapper } from "./card-wrapper";
import { toast } from "sonner";
import { TextInput } from "@/components/TextInput";
import { Checkbox } from "@/components/ui/checkbox"

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      login(values, callbackUrl)
        .then((data) => {
          if (data?.error)
            toast.error(data?.error);
          if (data?.success)
            toast.success(data?.success);
        })
        .catch(() => toast.error("Something went wrong"));
    });
  };

  return (
    <>
      <div className="w-[400px] grid gap-2">
        <h2 className="text-3xl text-center font-extrabold text-white lg:text-jelly-bean">
          Welcome back
        </h2>
        <p className="text-sm text-center text-white lg:text-[#0409219E]">
          Please enter your login details
        </p>
      </div>
      <CardWrapper>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-6"
          >
            <div>
              <TextInput id="email" label="Email" type="email" required />
              <TextInput id="password" label="Password" type="password" required />
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" className="border-border" />
                  <label
                    htmlFor="terms"
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </label>
                </div>
                <Link href="/auth/reset" className="text-[#4F46E5] hover:text-[#4F46E5]/80 text-sm">
                  Forgot password?
                </Link>
              </div>
            </div>
            <Button
              disabled={isPending}
              type="submit"
              variant="brand"
              className="w-full"
            >
              Login
            </Button>
            <div className="flex items-center justify-center gap-1.5 text-sm">
              <p>Do not have an account?</p>
              <Link href="/auth/register" className="text-[#4F46E5] hover:text-[#4F46E5]/80 font-medium">
                Sign up
              </Link>
            </div>
          </form>
        </Form>
      </CardWrapper>
    </>
  );
};
