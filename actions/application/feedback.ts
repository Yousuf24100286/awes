'use server';
import { currentUser } from '@/lib/auth';
import { UserRole } from '@prisma/client';
import {
  addFeedback,
  getApplicationByApplicationId,
} from '@/data/application';

export const feedbackAction = async (
  applicationId: string,
  feedback: string
) => {
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

  await addFeedback(application.id, feedback);

  return {
    success: 'Successfully added feedback!',
  };
};
