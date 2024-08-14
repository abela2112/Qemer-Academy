import NavbarRoutes from "@/components/navbar-routes";
import { Chapter, Course, UserProgress } from "@prisma/client";
import React from "react";
import CourseMobileSidebar from "./CourseMobileSidebar";

type Props = {
  course: Course & {
    Chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
};

const CourseNavbar = ({ course, progressCount }: Props) => {
  return (
    <div className="p-4 border-b flex items-center shadow-sm h-full bg-white">
      <CourseMobileSidebar course={course} progressCount={progressCount} />
      <NavbarRoutes />
    </div>
  );
};

export default CourseNavbar;
