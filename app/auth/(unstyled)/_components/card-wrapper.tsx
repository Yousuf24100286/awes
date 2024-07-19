"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
};

export const CardWrapper = ({
  children,
  headerLabel,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <p className="text-3xl text-center font-bold text-[#0409219E]">
          {headerLabel}
        </p>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter />
    </Card>
  );
};
