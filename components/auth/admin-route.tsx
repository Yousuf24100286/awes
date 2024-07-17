'use client';

import { useCurrentRole } from "@/hooks/use-current-role";
import { useRouter } from "next/navigation";

const AdminRoute = () => {
  const role = useCurrentRole();
  const router = useRouter();

  if (role !== 'ADMIN') {
    router.push('/unauthorized')
    return null;
  }

  return null;
}

export default AdminRoute;
