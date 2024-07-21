import { z } from 'zod';

export const Step1Schema = z.object({
  name: z.string().min(1, 'Required'),
  dateOfBirth: z.date(),
  phoneNumber: z.string().min(1, 'Required'),
  email: z.string().email().min(1, 'Required'),
  emergencyContactName: z.string().min(1, 'Required'),
  emergencyContactEmail: z
    .string()
    .email()
    .min(1, 'Required'),
  emergencyContactNumber: z.string().min(1, 'Required'),
  nationalIdCard: z.string().min(1, 'Required'),
  passport: z.string().optional(),
  nursingLicense: z.string().min(1, 'Required'),
  nursingDegree: z.string().min(1, 'Required'),
  nursingSchoolTranscript: z.string().optional(),
  highSchoolDiploma: z.string().optional(),
  highSchoolGrades: z.string().optional(),
  curriculumVitae: z.string().optional(),
});

export const Step2Schema = z.object({
  nationalId: z.string().url('Required'),
  passportPhoto: z.string().url('Required'),
  passportId: z.string().optional(),
  nursingSchoolDiploma: z.string().url('Required'),
  nursingExperienceCertificate: z.string().optional(),
});

export const Step3Schema = z.object({
  usSocialSecurityCard: z.string().optional(),
  usGreenCard: z.string().optional(),
  birthCertificate: z.string().url('Required'),
  spouseDetails: z
    .array(
      z.object({
        spouseDemographics: z.string().url('Required'),
        spouseBirthCertificate: z.string().url('Required'),
        spousePassport: z.string().url('Required'),
        spousePassportPhoto: z.string().url('Required'),
        marriageCertificate: z.string().url('Required'),
      })
    )
    .optional(),
  childrenDetails: z
    .array(
      z.object({
        birthCertificate: z.string().url('Required'),
        passportPhoto: z.string().url('Required'),
        immunizationRecord: z.string().url('Required'),
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
