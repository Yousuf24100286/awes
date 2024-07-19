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
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=""
        >
          <div className="">
            <TextInput id="email" label="Email" type="email" required />
            <TextInput id="password" label="Password" type="password" required />

            <Button
              size="sm"
              variant="link"
              asChild
              className="px-0 font-normal"
            >
              <Link href="/auth/reset">
                Forgot password?
              </Link>
            </Button>
          </div>
          <Button
            disabled={isPending}
            type="submit"
            variant="brand"
            size="brand"
            className="w-full"
          >
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
