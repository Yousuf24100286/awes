import { z } from 'zod';

export const Step1Schema = z.object({
  name: z.string(),
  dateOfBirth: z.date(),
  phoneNumber: z.string(),
  email: z.string(),
  emergencyContactName: z.string(),
  emergencyContactEmail: z.string(),
  emergencyContactNumber: z.string(),
  nationalIdCard: z.string(),
  passport: z.string().optional(),
  nursingLicense: z.string(),
  nursingDegree: z.string(),
  highSchoolDiploma: z.string().optional(),
  highSchoolGrades: z.string().optional(),
  curriculumVitae: z.string().optional(),
});

export const Step2Schema = z.object({
  nationalId: z.string(),
  passportPhoto: z.string(),
  passportId: z.string().optional(),
  nursingSchoolDiploma: z.string(),
  nursingSchoolTranscript: z.string().optional(),
  nursingExperienceCertificate: z.string().optional(),
});

export const Step3Schema = z.object({
  usSocialSecurityCard: z.string().optional(),
  usGreenCard: z.string().optional(),
  birthCertificate: z.string(),
  spouseDetails: z
    .array(
      z.object({
        spouseDemographics: z.string(),
        spouseBirthCertificate: z.string(),
        spousePassport: z.string(),
        spousePassportPhoto: z.string(),
        marriageCertificate: z.string(),
      })
    )
    .optional(),
  childrenDetails: z
    .array(
      z.object({
        birthCertificate: z.string(),
        passportPhoto: z.string(),
        immunizationRecord: z.string(),
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
