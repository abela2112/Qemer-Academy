import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: {
    courseId: string;
  };
};

const CourseIdPage = async ({ params: { courseId } }: Props) => {
  const course = await db.course.findUnique({
    where: {
      id: courseId,
    },
    include: {
      Chapters: {
        where: {
          isPublished: true,
        },

        orderBy: {
          position: "asc",
        },
      },
    },
  });
  if (!course) redirect("/");
  return redirect(`/courses/${courseId}/chapter/${course?.Chapters[0].id}`);
};

export default CourseIdPage;
