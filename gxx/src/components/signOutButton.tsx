"use client";

import React from 'react'
import { signOut } from 'next-auth/react'; "nextauth/React"

export default function SignOutButton() {
  return (
    <div>
      <button className="bg-orange-300 rounded-md p-2" onClick={() => signOut({ callbackUrl: "/login", redirect: true })}
      >
        Sign Out
    </button>
    </div>
  );
}
