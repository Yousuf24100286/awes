'use server';

import * as z from 'zod';
import { QueryStatusUpdateSchema } from '@/schemas/contactQuery';
import { currentUser } from '@/lib/auth';
import { UserRole } from '@prisma/client';
import { db } from '@/lib/db';

export const queryStatus = async (
  queryId: string,
  values: z.infer<typeof QueryStatusUpdateSchema>
) => {
  const validatedFields =
    QueryStatusUpdateSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  const user = await currentUser();

  if (!user) {
    return { error: 'Not authenticated!' };
  }

  if (user.role !== UserRole.ADMIN) {
    return { error: 'Not authorized!' };
  }

  const existingQuery = await db.contactQuery.findFirst({
    where: { id: queryId },
  });

  if (!existingQuery) {
    return { error: 'No query found!' };
  }

  try {
    await db.contactQuery.update({
      where: { id: queryId },
      data: {
        status: values.status,
      },
    });
  } catch (error) {
    console.error(error);
    return { error: 'Something went wrong!' };
  }

  return {
    success: 'Successfully updated query status!',
  };
};
