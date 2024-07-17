'use client';

import { useCurrentRole } from "@/hooks/use-current-role"
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const StaticAnalyticsPage = () => {
  const role = useCurrentRole();
  const router = useRouter();

  if (role !== 'ADMIN') {
    router.push('/unauthorized')
    return null
  }

  return (
    <iframe
      src='https://cloud.umami.is/share/uAzvXbWlb0kIpoFL/awes.us'
      className="w-px min-w-full min-h-screen"
    />
  )
}

export default StaticAnalyticsPage