'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import { useCurrentRole } from "@/hooks/use-current-role";

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
        <LoginButton asChild>
          <Button variant="brand" size="brand" className="w-max">
            Apply now
          </Button>
        </LoginButton>
      );
}

export default CallToAction;