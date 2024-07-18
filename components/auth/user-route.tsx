'use client';

import { useCurrentUser } from "@/hooks/use-current-user";
import { useRouter } from "next/navigation";

const UserRoute = () => {
  const user = useCurrentUser();
  const router = useRouter();

  if (user && user.role !== 'USER') {
    router.push('/unauthorized')
    return null;
  }

  return null;
}

export default UserRoute;
