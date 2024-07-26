import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: {
    courseId: string;
  };
};

const CourseIdPage = async ({ params: { courseId } }: Props) => {
  const { userId } = auth();
  if (!userId) return redirect("/");
  const course = await db.course.findUnique({
    where: { id: courseId, userId },
  });
  if (!course) return redirect("/");
  return <div>course id :{courseId}</div>;
};

export default CourseIdPage;
