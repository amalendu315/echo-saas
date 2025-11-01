"use client";

import {OrganizationSwitcher, UserButton} from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p>apps/web</p>
        <div className="max-w-sm w-full mx-auto">
            <UserButton />
            <OrganizationSwitcher
                hidePersonal={true}
            />
        </div>
    </div>
  )
}
