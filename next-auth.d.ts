import {
  UserRole,
  Application,
  SpouseDetail,
  ChildrenDetail,
} from '@prisma/client';
import NextAuth, { type DefaultSession } from 'next-auth';

export type ExtendedUser = DefaultSession['user'] & {
  role: UserRole;
  application?: Application & {
    spouseDetails: SpouseDetail[];
    childrenDetails: ChildrenDetail[];
  };
};

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser;
  }
}
