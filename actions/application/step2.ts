'use server';

import * as z from 'zod';
import { Step2Schema } from '@/schemas/application';

export const step2 = async (
  values: z.infer<typeof Step2Schema>
) => {
  const validatedFields = Step2Schema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  console.log(validatedFields.data);

  return { success: 'Successfully updated step2!' };
};
