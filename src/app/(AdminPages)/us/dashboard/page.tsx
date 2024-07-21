"use client";

import React from "react";
import { useSession } from "next-auth/react";
import UserDashBoard from "@/components/ui/DashBoard/UserDashBoard";

export default function DashboardPage() {
  const { data: session } = useSession();
  console.log("session", session);
  console.log("session?.user.role", session?.user.role);
  if (session && session.user && session.user.email) {
    console.log("verified");
    return (
      <UserDashBoard
        name={session.user.name || "AnonymousUser"}
        email={session.user.email}
        role="user"
      />
    );
  }
}
