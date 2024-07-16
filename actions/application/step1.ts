'use server';

import * as z from 'zod';
import { Step1Schema } from '@/schemas/application';

export const step1 = async (
  values: z.infer<typeof Step1Schema>
) => {
  const validatedFields = Step1Schema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  console.log(validatedFields.data);

  return { success: 'Successfully updated step1!' };
};
