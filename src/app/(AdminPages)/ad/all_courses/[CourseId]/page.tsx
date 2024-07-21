"use client";

import React from "react";
import { useSession } from "next-auth/react";
import EditCourseComponet from "@/components/ui/EditCourse/page";

export default function EditCourse({
  params,
}: {
  params: { CourseId: string };
}) {
  const { data: session } = useSession();
  if (session && session.user && session.user.email) {
    console.log("verified");
    return (
      <EditCourseComponet
        email={session.user.email}
        roll="admin"
        CourseId={params.CourseId}
      />
    );
  }
}
