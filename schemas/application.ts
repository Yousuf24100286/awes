import { z } from 'zod';

export const Step1Schema = z.object({
  name: z.string().min(1, 'Name is required'),
  dateOfBirth: z.string().optional(),
  phoneNumber: z
    .string()
    .min(1, 'Phone number is required'),
  email: z.string().email('Invalid email format'),
  emergencyContactName: z
    .string()
    .min(1, 'Emergency contact name is required'),
  emergencyContactEmail: z
    .string()
    .email('Invalid email format'),
  emergencyContactNumber: z
    .string()
    .min(1, 'Emergency contact number is required'),
  nationalIdCard: z.string().optional(),
  passport: z.string().optional(),
  nursingLicense: z
    .string()
    .min(1, 'Nursing license is required'),
  nursingDegree: z
    .string()
    .min(1, 'Nursing degree is required'),
  highSchoolDiploma: z.string().optional(),
  highSchoolGrades: z.string().optional(),
  curriculumVitae: z.string().optional(),
});
