'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import { LoginButton } from "@/components/auth/login-button";
import { useCurrentRole } from "@/hooks/use-current-role";
import Image from "next/image";

const CallToAction = () => {
  const role = useCurrentRole();

  return role === 'ADMIN' ? (
    <Button variant="brand" size="brand" asChild>
      <Link href='/users'>
        Go to Dashboard
      </Link>
    </Button>
  ) :
    role === 'USER' ? (
      <Button variant="brand" size="brand" asChild>
        <Link href='/application'>
          Go to Dashboard
        </Link>
      </Button>
    )
      : (
        <LoginButton asChild>
          <Button variant="brand" size="brand">
            Apply now
          </Button>
        </LoginButton>
      );
}

export default CallToAction;