import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { Chapter, Course, UserProgress } from "@prisma/client";
import { redirect } from "next/navigation";
import React from "react";
import CourseSidebarItems from "./CourseSidebarItems";

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
    <div className="h-full border-r shadow-sm overflow-y-auto flex flex-col">
      <div className="flex p-8 flex-col border-b">
        <h1 className="font-semibold">{course.title}</h1>

        {/* course purchase */}
      </div>
      <div className="flex flex-col w-full">
        {course.Chapters.map((chapter) => (
          <CourseSidebarItems
            key={chapter.id}
            id={chapter.id}
            label={chapter.title}
            courseId={course.id}
            isCompleted={!!chapter.userProgress?.[0]?.isCompleted}
            isLocked={!chapter.isFree}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseSidebar;
