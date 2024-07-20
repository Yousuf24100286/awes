import * as z from 'zod';
import { QueryStatus } from '@prisma/client';

export const ContactQuerySchema = z.object({
  name: z.string().min(1, 'Required'),
  email: z.string().email().min(1, 'Required'),
  subject: z.string().min(1, 'Required'),
  message: z.string().min(1, 'Required'),
});

export const QueryStatusUpdateSchema = z.object({
  status: z.nativeEnum(QueryStatus),
});
