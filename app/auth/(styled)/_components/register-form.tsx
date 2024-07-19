"use client";

import * as z from "zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { RegisterSchema } from "@/schemas";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { register } from "@/actions/register";
import { CardWrapper } from "./card-wrapper";
import { TextInput } from "@/components/TextInput";
import { toast } from "sonner";

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
    <CardWrapper
      headerLabel="Create an account"
      backButtonLabel="Already have an account?"
      backButtonHref="/auth/login"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="space-y-4">
            <TextInput id="name" label="Name" required />
            <TextInput id="email" label="Email" type="email" required />
            <TextInput id="password" label="Password" type="password" required />
          </div>
          <Button
            disabled={isPending}
            type="submit"
            variant="brand"
            size="brand"
            className="w-full"
          >
            Create an account
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
