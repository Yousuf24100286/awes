'use server';
import { currentUser } from '@/lib/auth';
import { UserRole } from '@prisma/client';
import { z } from 'zod';
import { ApplicationStepUpdateSchema } from '@/schemas/application';
import { db } from '@/lib/db';

export const applicationStatus = async (
  applicationId: string,
  values: z.infer<typeof ApplicationStepUpdateSchema>
) => {
  const validatedFields =
    ApplicationStepUpdateSchema.safeParse(values);

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

  const application = await db.application.findUnique({
    where: { id: applicationId },
  });

  if (!application) {
    return { error: 'Application not found!' };
  }

  try {
    await db.application.update({
      where: { id: application.id },
      data: {
        applicationStep: values.status,
      },
    });
  } catch (error) {
    console.error(error);
    return { error: 'Something went wrong!' };
  }

  return {
    success: 'Successfully updated step!',
  };
};
