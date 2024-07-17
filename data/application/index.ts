import { db } from '@/lib/db';
import {
  Step1Schema,
  Step2Schema,
  Step3Schema,
  AdminDocumentsSchema,
} from '@/schemas/application';
import { z } from 'zod';
import { ApplicationStep } from '@prisma/client';

export async function getOrCreateApplication(
  userId: string
) {
  let application = await db.application.findUnique({
    where: { userId: userId },
  });

  if (!application) {
    application = await db.application.create({
      data: {
        userId: userId,
      },
    });
  }

  return application;
}

export async function handleStep1(
  applicationId: string,
  step1Data: z.infer<typeof Step1Schema>
) {
  return await db.application.update({
    where: { id: applicationId },
    data: step1Data,
  });
}

export async function handleStep2(
  applicationId: string,
  step2Data: z.infer<typeof Step2Schema>
) {
  return await db.application.update({
    where: { id: applicationId },
    data: step2Data,
  });
}

export async function handleStep3(
  applicationId: string,
  step3Data: z.infer<typeof Step3Schema>
) {
  return await db.application.update({
    where: { id: applicationId },
    data: {
      ...step3Data,
      childrenDetails: {
        create: step3Data.childrenDetails,
      },
      spouseDetails: {
        create: step3Data.spouseDetails,
      },
    },
  });
}

export async function handleAdminDocuments(
  applicationId: string,
  adminDocumentsData: z.infer<typeof AdminDocumentsSchema>
) {
  return await db.application.update({
    where: { id: applicationId },
    data: adminDocumentsData,
  });
}

export async function addFeedback(
  applicationId: string,
  feedback: string
) {
  const feedbackData = {
    feedback,
  };
  return await db.application.update({
    where: { id: applicationId },
    data: feedbackData,
  });
}

export async function updateApplicationStep(
  applicationId: string
) {
  const application = await db.application.findUnique({
    where: { id: applicationId },
  });

  let nextStep = application.applicationStep;
  switch (application.applicationStep) {
    case ApplicationStep.STEP_1:
      nextStep = ApplicationStep.STEP_2;
      break;
    case ApplicationStep.STEP_2:
      nextStep = ApplicationStep.STEP_3;
      break;
    default:
      break;
  }

  return await db.application.update({
    where: { id: application.id },
    data: {
      applicationStep: nextStep,
    },
  });
}
