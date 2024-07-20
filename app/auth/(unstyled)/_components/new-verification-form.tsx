"use client";

import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";

import { newVerification } from "@/actions/auth/new-verification";
import { CardWrapper } from "./card-wrapper";
import { toast } from "sonner";

export const NewVerificationForm = () => {
  const searchParams = useSearchParams();

  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (!token) {
      toast.error("Missing token!");
      return;
    }

    newVerification(token)
      .then((data) => {
        if (data?.error) {
          setError(data?.error);
          toast.error(data?.error);
        }
        if (data?.success) {
          setSuccess(data?.success);
          toast.success(data?.success);
        }
      })
      .catch(() => {
        toast.error("Something went wrong!");
      })
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirming your verification"
    >
      <div className="flex items-center w-full justify-center">
        {!success && !error ? (
          <BeatLoader />
        ) :
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800">
              {success || error}
            </p>
          </div>
        }
      </div>
    </CardWrapper>
  )
}