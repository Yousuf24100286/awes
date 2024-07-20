'use server';

import { db } from '@/lib/db';
import { ContactQuerySchema } from '@/schemas/contactQuery';
import { z } from 'zod';

export const addQuery = async (
  values: z.infer<typeof ContactQuerySchema>
) => {
  const validatedFields =
    ContactQuerySchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  try {
    await db.contactQuery.create({
      data: {
        name: validatedFields.data.name,
        email: validatedFields.data.email,
        subject: validatedFields.data.subject,
        message: validatedFields.data.message,
      },
    });

    return { success: 'Successfully added query!' };
  } catch (error) {
    console.error(error);
    return { error: 'Failed to add query!' };
  }
};
