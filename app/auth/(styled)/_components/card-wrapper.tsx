"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";

interface CardWrapperProps {
  children: React.ReactNode;
};

export const CardWrapper = ({
  children,
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
