'use server';

import * as z from 'zod';
import { AdminDocumentsSchema } from '@/schemas/application';

export const adminDocuments = async (
  values: z.infer<typeof AdminDocumentsSchema>
) => {
  const validatedFields =
    AdminDocumentsSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  console.log(validatedFields.data);

  return {
    success: 'Successfully updated admin documents!',
  };
};
