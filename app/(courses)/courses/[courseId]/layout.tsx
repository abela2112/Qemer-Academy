import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import CourseSidebar from "./_components/CourseSidebar";
import { getProgress } from "@/app/actions/get-progress";
import CourseNavbar from "./_components/CourseNavbar";

type Props = {
  params: { courseId: string };
  children: React.ReactNode;
};

const CourseLayout = async ({ params, children }: Props) => {
  const { userId } = auth();
  if (!userId) redirect("/");
  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
    include: {
      Chapters: {
        where: {
          isPublished: true,
        },
        include: {
          userProgress: {
            where: {
              userId,
            },
          },
        },
        orderBy: {
          position: "asc",
        },
      },
    },
  });
  if (!course) redirect("/");
  const progressCount = await getProgress(userId, course.id);
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 z-50 w-full">
        <CourseNavbar course={course} progressCount={progressCount} />
      </div>
      <div className="h-full hidden md:flex flex-col fixed inset-y-0 z-50 w-56">
        <CourseSidebar course={course} progressCount={progressCount} />
      </div>

      <main className="md:pl-56 pt-[80px] min-h-screen bg-slate-50 relative">
        {children}
      </main>
    </div>
  );
};

export default CourseLayout;
