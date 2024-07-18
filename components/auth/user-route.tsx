'use client';

import { useCurrentRole } from "@/hooks/use-current-role";
import { useRouter } from "next/navigation";

const UserRoute = () => {
  const role = useCurrentRole();
  const router = useRouter();

  if (role !== 'USER') {
    router.push('/unauthorized')
    return null;
  }

  return null;
}

export default UserRoute;
