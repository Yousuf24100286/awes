import { z } from 'zod';

export const Step1Schema = z.object({
  name: z.string().optional(),
  dateOfBirth: z.string().optional(),
  phoneNumber: z.string().optional(),
  email: z.string().optional(),
  emergencyContactName: z.string().optional(),
  emergencyContactEmail: z.string().optional(),
  emergencyContactNumber: z.string().optional(),
  nationalIdCard: z.string().optional(),
  passport: z.string().optional(),
  nursingLicense: z.string().optional(),
  nursingDegree: z.string().optional(),
  highSchoolDiploma: z.string().optional(),
  highSchoolGrades: z.string().optional(),
  curriculumVitae: z.string().optional(),
});

export const Step2Schema = z.object({
  nationalId: z.string().optional(),
  passportPhoto: z.string().optional(),
  passportId: z.string().optional(),
  nursingSchoolDiploma: z.string().optional(),
  nursingSchoolTranscript: z.string().optional(),
  nursingExperienceCertificate: z.string().optional(),
});

export const Step3Schema = z.object({
  usSocialSecurityCard: z.string().optional(),
  usGreenCard: z.string().optional(),
  birthCertificate: z.string().optional(),
  spouseDetails: z
    .array(
      z.object({
        spouseDemographics: z.string().optional(),
        spouseBirthCertificate: z.string().optional(),
        spousePassport: z.string().optional(),
        spousePassportPhoto: z.string().optional(),
        marriageCertificate: z.string().optional(),
      })
    )
    .optional(),
  childrenDetails: z
    .array(
      z.object({
        birthCertificate: z.string().optional(),
        passportPhoto: z.string().optional(),
        immunizationRecord: z.string().optional(),
      })
    )
    .optional(),
});

export const AdminDocumentsSchema = z.object({
  toeflExamResult: z.string().optional(),
  usNursingEvaluation: z.string().optional(),
  usCgfnsCertificate: z.string().optional(),
  usVisaScreen: z.string().optional(),
  usJobOffer: z.string().optional(),
});
