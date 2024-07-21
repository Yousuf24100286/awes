'use client';

import { addQuery } from "@/actions/add-query";
import { TextInput } from "@/components/TextInput";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { ContactQuerySchema } from "@/schemas/contactQuery";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const ContactForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ContactQuerySchema>>({
    resolver: zodResolver(ContactQuerySchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const { getFieldState, formState } = form;
  const fieldState = getFieldState("message", formState);

  const onSubmit = (values: z.infer<typeof ContactQuerySchema>) => {
    console.log('values', values)

    startTransition(() => {
      addQuery(values)
        .then((data) => {
          if (data.success)
            toast.success(data.success);
          if (data.error)
            toast.error(data.error);
          form.reset({
            name: '', email: '', subject: '', message: ''
          });
        })
        .catch((error) => {
          console.error(error);
          toast.error("An error occurred. Please try again.");
        })
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <div className="space-y-2">
          <TextInput id="name" label="Name" required />
          <TextInput id="email" type="email" label="Email" required />
          <TextInput id="subject" label="Subject" required />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Message<span className="text-destructive">*</span></FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    className={fieldState.error ? "border-destructive" : ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          variant="brand"
          className="w-full"
          disabled={isPending}
        >
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default ContactForm