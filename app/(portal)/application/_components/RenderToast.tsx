'use client';

import { cn } from "@/lib/utils"
import { ApplicationStep } from "@prisma/client"
import { X } from "lucide-react";
import { useState } from "react";

const RenderToast = ({ className, step }: { className: string, step: ApplicationStep | undefined }) => {
  const [show, setShow] = useState(step === 'NOT_ALLOWED' ? true : false);

  return (
    show && (
      <div className={cn("flex items-start gap-5 rounded-xl bg-[#F5F9FF] p-4 pt-3 pb-6", className)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect width={24} height={24} rx={6} fill="url(#paint0_linear_1619_1426)" />
          <path
            d="M12 16V11"
            stroke="white"
            strokeWidth={1.5}
            strokeLinecap="round"
          />
          <circle
            cx={1}
            cy={1}
            r={1}
            transform="matrix(1 0 0 -1 11 9)"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1619_1426"
              x1={12}
              y1={-4.5}
              x2={12}
              y2={28}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4DCAFF" />
              <stop offset={1} stopColor="#4EA3E0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="grid gap-1 max-w-[320px] w-full">
          <h3 className="text-[#040921] text-lg">Important note.</h3>
          <p className="text-[#04092199]">
            To access the applications, please contact us to arrange for your first payment.
            {' '}
            <a href="mailto:contact@awes.us" className="underline hover:text-[#040921]">contact@awes.us</a>
          </p>
        </div>
        <button
          onClick={() => setShow(false)}>
          <X className="text-[#040921] hover:text-[#14182ccb]" />
        </button>
      </div>
    )
  )
}

export default RenderToast