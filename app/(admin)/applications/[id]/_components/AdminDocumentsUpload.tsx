'use client';
import * as z from "zod";
import { useState, useTransition } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AdminDocumentsSchema } from "@/schemas/application";

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
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { adminDocuments } from '@/actions/application/adminDocuments';
import {
  Form
} from "@/components/ui/form";
import { FileInput } from "@/components/FileInput";


const AdminDocumentsUpload = ({ applicationId }: { applicationId: string }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof AdminDocumentsSchema>>({
    resolver: zodResolver(AdminDocumentsSchema),
  });

  const onSubmit = async (values: z.infer<typeof AdminDocumentsSchema>) => {
    startTransition(() => {
      adminDocuments(applicationId, values)
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
          setDialogOpen(false);
          router.refresh();
        });
    });
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button variant='outline'>Upload Documents</Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col w-[400px] justify-between">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <DialogHeader>
              <DialogTitle className='text-center font-semibold'>
                Upload Documents
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-2 grow">
              <FileInput id="toeflExamResult" label="Toefl Exam Result" />
              <FileInput id="usNursingEvaluation" label="US Nursing Evaluation" />
              <FileInput id="usCgfnsCertificate" label="US CGFNS Certificate" />
              <FileInput id="usVisaScreen" label="US Visa Screen" />
              <FileInput id="usJobOffer" label="US Job Offer" />
            </div>
            <DialogFooter>
              <Button
                type="submit"
                variant="brand"
                disabled={isPending}
              >
                Upload
              </Button>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default AdminDocumentsUpload