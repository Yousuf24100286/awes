"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
// import { BackButton } from "@/components/auth/back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  // headerLabel: string;
  // backButtonLabel: string;
  // backButtonHref: string;
};

export const CardWrapper = ({
  children,
  // backButtonLabel,
  // backButtonHref,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader className="pt-0" />
      <CardContent>
        {children}
      </CardContent>
      <CardFooter className="pb-0" />
    </Card>
  );
};
