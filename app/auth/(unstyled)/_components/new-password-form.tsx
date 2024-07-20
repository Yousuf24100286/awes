"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { NewPasswordSchema } from "@/schemas/auth";
import {
  Form
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { newPassword } from "@/actions/auth/new-password";
import { CardWrapper } from "./card-wrapper";
import { TextInput } from "@/components/TextInput";
import { toast } from "sonner";

export const NewPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    startTransition(() => {
      newPassword(values, token)
        .then((data) => {
          if (data?.error)
            toast.error(data?.error);
          if (data?.success)
            toast.success(data?.success);
        });
    });
  };

  return (
    <CardWrapper headerLabel="Enter a new password">
      < Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <TextInput id="password" label="Password" type="password" required />
          <Button
            disabled={isPending}
            type="submit"
            variant="brand"

            className="w-full"
          >
            Reset password
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
