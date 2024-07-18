'use server';

import * as z from 'zod';
import { Step2Schema } from '@/schemas/application';
import { currentUser } from '@/lib/auth';
import {
  getOrCreateApplication,
  handleStep2,
} from '@/data/application';
import { UserRole } from '@prisma/client';

export const step2 = async (
  values: z.infer<typeof Step2Schema>
) => {
  const validatedFields = Step2Schema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  const user = await currentUser();

  if (!user) {
    return { error: 'Not authenticated!' };
  }

  if (user.role !== UserRole.USER) {
    return { error: 'Not authorized!' };
  }

  const application = await getOrCreateApplication(user.id);

  await handleStep2(application.id, validatedFields.data);

  return { success: 'Successfully updated step2!' };
};
