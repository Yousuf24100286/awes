'use server';

import { db } from '@/lib/db';
import { NewsletterSchema } from '@/schemas/newsletter';
import { z } from 'zod';

export const subscribeNewsletter = async (
  values: z.infer<typeof NewsletterSchema>
) => {
  const validatedFields =
    NewsletterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  const existingEmail = await db.newsletter.findFirst({
    where: {
      email: validatedFields.data.email,
    },
  });

  if (existingEmail) {
    return { error: 'Email already subscribed!' };
  }

  try {
    await db.newsletter.create({
      data: {
        email: validatedFields.data.email,
      },
    });

    return {
      success: 'Successfully added email to newsletter!',
    };
  } catch (error) {
    return { error: 'Failed to add email to newsletter!' };
  }
};
