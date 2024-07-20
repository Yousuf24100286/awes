import * as z from 'zod';

export const NewsletterSchema = z.object({
  email: z.string().email().min(1, 'Required'),
});
