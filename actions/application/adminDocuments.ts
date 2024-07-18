'use server';

import * as z from 'zod';
import { AdminDocumentsSchema } from '@/schemas/application';
import { currentUser } from '@/lib/auth';
import { UserRole } from '@prisma/client';
import {
  getApplicationByApplicationId,
  handleAdminDocuments,
} from '@/data/application';

export const adminDocuments = async (
  applicationId: string,
  values: z.infer<typeof AdminDocumentsSchema>
) => {
  const validatedFields =
    AdminDocumentsSchema.safeParse(values);

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

  const application = await getApplicationByApplicationId(
    applicationId
  );

  if (!application) {
    return { error: 'Application not found!' };
  }

  await handleAdminDocuments(
    application.id,
    validatedFields.data
  );

  return {
    success: 'Successfully updated admin documents!',
  };
};
