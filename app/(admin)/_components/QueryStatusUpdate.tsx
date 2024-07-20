'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Form,
  FormControl, FormField,
  FormItem, FormMessage
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { QueryStatusUpdateSchema } from "@/schemas/contactQuery";
import { QueryStatus } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { queryStatus } from "@/actions/update-query-status";

const QueryUpdateStatus = ({ id }: { id: string }) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm<z.infer<typeof QueryStatusUpdateSchema>>({
    resolver: zodResolver(QueryStatusUpdateSchema),
    defaultValues: {
      status: undefined,
    },
  })

  function onSubmit(values: z.infer<typeof QueryStatusUpdateSchema>) {
    startTransition(() => {
      queryStatus(id, values)
        .then((data) => {
          if (data.error) {
            toast.error(data.error);
          } else {
            toast.success(data.success);
          }
          router.refresh();
        })
        .catch((error) => {
          console.error(error);
          toast.error('Something went wrong!');
        })
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="min-w-28 font-normal">
                    <SelectValue placeholder="Select ..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(QueryStatus).map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>Update</Button>
      </form>
    </Form>
  )
}

export default QueryUpdateStatus