'use client';

import { toast } from 'sonner';
import { useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { nextStep } from '@/actions/application/nextStep';

const NextStep = ({ applicationId }: { applicationId: string }) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleNextStep = async () => {
    startTransition(() => {
      nextStep(applicationId)
        .then((data) => {
          if (data.error) {
            toast.error(data.error);
          } else {
            toast.success(data.success);
          }
        })
        .catch((error) => {
          console.error(error);
          toast.error('Something went wrong');
        })
        .finally(() => {
          router.refresh();
        });
    });
  }

  return (
    <Button
      variant='secondary'
      disabled={isPending}
      onClick={handleNextStep}
    >
      Allow Next Step
    </Button>
  )
}

export default NextStep