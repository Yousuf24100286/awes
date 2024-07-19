'use client';

import { useCurrentUser } from "@/hooks/use-current-user";
import { useRouter } from "next/navigation";

const ProtectStep = ({ step }: { step: 'STEP_1' | 'STEP_2' | 'STEP_3' }) => {
  const user = useCurrentUser();
  const router = useRouter();

  if (user && user.application) {
    if ((step === 'STEP_2' || step === 'STEP_3') && user.application.applicationStep === 'STEP_1') {
      router.push('/unauthorized')
      return null;
    }
    if (step === 'STEP_3' && user.application.applicationStep === 'STEP_2') {
      router.push('/unauthorized')
      return null;
    }
    return null;
  }

  return null;
}

export default ProtectStep;
