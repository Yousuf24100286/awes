"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { ResetSchema } from "@/schemas";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { reset } from "@/actions/reset";
import { CardWrapper } from "./card-wrapper";
import { TextInput } from "@/components/TextInput";
import { toast } from "sonner";

export const ResetForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    startTransition(() => {
      reset(values)
        .then((data) => {
          if (data?.error)
            toast.error(data?.error);
          if (data?.success)
            toast.success(data?.success);
        });
    });
  };

  return (
    <CardWrapper headerLabel="Forgot your password?">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <TextInput id="email" label="Email" type="email" required />
          <Button
            disabled={isPending}
            type="submit"
            variant="brand"
            size="brand"
            className="w-full"
          >
            Send reset email
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
