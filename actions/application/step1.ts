'use server';

import * as z from 'zod';
import { Step1Schema } from '@/schemas/application';
import { currentUser } from '@/lib/auth';
import {
  getOrCreateApplication,
  handleStep1,
} from '@/data/application';
import { UserRole } from '@prisma/client';

export const step1 = async (
  values: z.infer<typeof Step1Schema>
) => {
  const validatedFields = Step1Schema.safeParse(values);

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

  await handleStep1(application.id, validatedFields.data);

  return { success: 'Successfully updated step1!' };
};
