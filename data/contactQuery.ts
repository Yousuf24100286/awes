import { db } from '@/lib/db';

export const getContactQueries = async () => {
  const queries = await db.contactQuery.findMany({});

  return queries;
};
