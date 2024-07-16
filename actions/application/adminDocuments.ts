'use server';

import * as z from 'zod';
import { DocumentsSchema } from '@/schemas/application';

export const adminDocuments = async (
  values: z.infer<typeof DocumentsSchema>
) => {
  const validatedFields = DocumentsSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  console.log(validatedFields.data);

  return {
    success: 'Successfully updated admin documents!',
  };
};
