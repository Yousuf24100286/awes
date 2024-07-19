"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { BackButton } from "@/components/auth/back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
};

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <p className="text-3xl text-center font-extrabold text-[#0409219E]">
          {headerLabel}
        </p>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <BackButton
        label={backButtonLabel}
        href={backButtonHref}
      />
      <CardFooter />
    </Card>
  );
};
