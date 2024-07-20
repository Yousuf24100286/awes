import { db } from '@/lib/db';

export const getNewsletterSubscribers = async () => {
  const subscribers = await db.newsletter.findMany({});

  return subscribers;
};
