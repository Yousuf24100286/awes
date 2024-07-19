'use client';

import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";

export const TextInput = ({ id, label, className, type = "text", required = false }: { id: string, label: string, type?: string, className?: string, required?: boolean }) => {
  const form = useFormContext();
  const { getFieldState, formState } = form;
  const fieldState = getFieldState(id, formState);

  return (
    <FormField
      control={form.control}
      name={id}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>{label}{required && <span className="text-destructive">*</span>}</FormLabel>
          <FormControl>
            <Input type={type} {...field} className={cn(fieldState.error ? "border-destructive" : "", className)} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}