import * as z from 'zod';

export const ContactQuerySchema = z.object({
  name: z.string().min(1, 'Required'),
  email: z.string().email().min(1, 'Required'),
  subject: z.string().min(1, 'Required'),
  message: z.string().min(1, 'Required'),
});
