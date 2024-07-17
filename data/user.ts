import { db } from '@/lib/db';

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: { email },
    });

    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id },
    });

    return user;
  } catch {
    return null;
  }
};

export const getUsers = async () => {
  try {
    const users = await db.user.findMany({
      // include: {
      //   application: {
      //     select: {
      //       id: true,
      //     },
      //   },
      // },
    });

    return users;
  } catch {
    return null;
  }
};

export const getCompleteUser = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id },
      include: {
        application: {
          include: {
            spouseDetails: true,
            childrenDetails: true,
          },
        },
      },
    });

    return user;
  } catch {
    return null;
  }
};
