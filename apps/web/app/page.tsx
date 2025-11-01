"use client";

import {useMutation, useQuery,Authenticated, Unauthenticated} from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import {Button} from "@workspace/ui/components/button";
import {SignInButton, UserButton} from "@clerk/nextjs";

export default function Page() {
    const addUser = useMutation(api.users.userMutation)
  return (
      <>
      <Authenticated>
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p>apps/web</p>
        <Button onClick={()=>addUser()}>Add</Button>
        <div className="max-w-sm w-full mx-auto">
            <UserButton />
        </div>
    </div>
      </Authenticated>
          <Unauthenticated>
              <SignInButton>Sign In</SignInButton>
          </Unauthenticated>
      </>
  )
}
