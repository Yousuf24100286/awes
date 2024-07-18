import { UserRole, Application } from '@prisma/client';
import NextAuth, { type DefaultSession } from 'next-auth';

export type ExtendedUser = DefaultSession['user'] & {
  role: UserRole;
  application?: Application;
};

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser;
  }
}
