'use client';

import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { feedbackAction } from '@/actions/application/feedback';
import { useRouter } from 'next/navigation';

const Feedback = ({ applicationId }: { applicationId: string }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [feedback, setFeedback] = useState('');
  const router = useRouter();

  const handleAddFeedback = async () => {
    startTransition(() => {
      feedbackAction(applicationId, feedback)
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
          setFeedback('');
          setDialogOpen(false);
          router.refresh();
        });
    });
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button>Add Feedback</Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col h-[250px] w-[400px] justify-between">
        <DialogHeader>
          <DialogTitle className='text-center font-semibold'>
            Provide Feedback
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2 grow">
          <Label>Feedback</Label>
          <Textarea
            className="w-full h-20"
            placeholder="Type your feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>
        <DialogFooter>
          <Button
            type="submit"
            disabled={isPending}
            onClick={handleAddFeedback}
          >
            Add
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default Feedback