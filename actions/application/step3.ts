'use server';

import * as z from 'zod';
import { Step3Schema } from '@/schemas/application';

export const step3 = async (
  values: z.infer<typeof Step3Schema>
) => {
  const validatedFields = Step3Schema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  console.log(validatedFields.data);

  return { success: 'Successfully updated step3!' };
};
