'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCurrentRole } from "@/hooks/use-current-role";
import { RegisterButton } from "./auth/register-button";

const CallToAction = () => {
  const role = useCurrentRole();

  return role === 'ADMIN' ? (
    <Button variant="brand" size="brand" className="w-max">
      <Link href='/users'>
        Go to Dashboard
      </Link>
    </Button>
  ) :
    role === 'USER' ? (
      <Button variant="brand" size="brand" className="w-max">
        <Link href='/application'>
          Go to Dashboard
        </Link>
      </Button>
    )
      : (
        <RegisterButton asChild>
          <Button variant="brand" size="brand" className="w-max">
            Sign up
          </Button>
        </RegisterButton>
      );
}

export default CallToAction;