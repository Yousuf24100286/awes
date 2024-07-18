'use client';

import { useCurrentUser } from "@/hooks/use-current-user";
import { useRouter } from "next/navigation";

const AdminRoute = () => {
  const user = useCurrentUser();
  const router = useRouter();

  if (user && user.role !== 'ADMIN') {
    router.push('/unauthorized')
    return null;
  }

  return null;
}

export default AdminRoute;
