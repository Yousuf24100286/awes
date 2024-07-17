'use server';

import * as z from 'zod';
import { Step3Schema } from '@/schemas/application';
import { currentUser } from '@/lib/auth';
import {
  getOrCreateApplication,
  handleStep3,
} from '@/data/application';

export const step3 = async (
  values: z.infer<typeof Step3Schema>
) => {
  const validatedFields = Step3Schema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  const user = await currentUser();

  if (!user) {
    return { error: 'Not authenticated!' };
  }

  const application = await getOrCreateApplication(user.id);

  await handleStep3(application.id, validatedFields.data);

  return { success: 'Successfully updated step3!' };
};
