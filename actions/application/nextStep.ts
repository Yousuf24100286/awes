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

  const res = await updateApplicationStep(applicationId);

  if (res === -1) {
    return { error: 'Application not found!' };
  }

  if (res === 0) {
    return {
      success: 'Application is already in the final step!',
    };
  }

  return {
    success: 'Successfully updated step!',
  };
};
