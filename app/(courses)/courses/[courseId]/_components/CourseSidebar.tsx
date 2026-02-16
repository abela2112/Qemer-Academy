import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { Chapter, Course, UserProgress } from "@prisma/client";
import { redirect } from "next/navigation";
import React from "react";
import CourseSidebarItems from "./CourseSidebarItems";
import CourseProgress from "@/components/course-progress";

type Props = {
  course: Course & {
    Chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
};

const CourseSidebar = async ({ course, progressCount }: Props) => {
  const { userId } = auth();
  if (!userId) redirect("/");
  const purchase = await db.purchase.findUnique({
    where: {
      userId_courseId: {
        courseId: course.id,
        userId,
      },
    },
  });
  return (
    <div className="h-full border-r border-[#111827] bg-[#111827] overflow-y-auto shadow-sm flex flex-col w-full z-50">
      <div className="p-7 border-b border-white/10 flex flex-col gap-y-4">
        <h1 className="font-bold text-lg text-white tracking-tight">
          {course.title}
        </h1>

        {/* course purchase */}
        {purchase && (
          <div className="mt-2">
            <CourseProgress
              value={progressCount}
              variant="success"
              size="default"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col w-full">
        {course.Chapters.map((chapter) => (
          <CourseSidebarItems
            key={chapter.id}
            id={chapter.id}
            label={chapter.title}
            courseId={course.id}
            isCompleted={!!chapter.userProgress?.[0]?.isCompleted}
            isLocked={!chapter.isFree && !purchase}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseSidebar;
