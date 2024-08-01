'use client';

import { cn } from "@/lib/utils"
import { ApplicationStep } from "@prisma/client"
import { X } from "lucide-react";
import { useState } from "react";

const RenderToast = ({ className, step }: { className: string, step: ApplicationStep | undefined }) => {
  const [show, setShow] = useState(step === 'NOT_ALLOWED' ? true : false);

  return (
    show && (
      <div className={cn("max-w-sm w-full rounded-xl bg-red-100 p-10 py-6", className)}>
        <div className="relative">
          <button
            onClick={() => setShow(false)}
            className="absolute -right-8 -top-4"
          >
            <X className="text-red-600 hover:text-red-500" />
          </button>
          <p className="text-red-500">
            To access the applications, please contact us to arrange for your first payment.
            {' '}
            <a href="mailto:contact@awes.us" className="underline hover:text-red-600">contact@awes.us</a>
          </p>
        </div>
      </div>
    )
  )
}

export default RenderToast