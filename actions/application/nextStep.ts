'use server';
import { currentUser } from '@/lib/auth';
import { UserRole } from '@prisma/client';
import {
  getApplicationByApplicationId,
  updateApplicationStep,
} from '@/data/application';

export const nextStep = async (applicationId: string) => {
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

  await updateApplicationStep(application.id);

  return {
    success: 'Successfully updated step!',
  };
};
