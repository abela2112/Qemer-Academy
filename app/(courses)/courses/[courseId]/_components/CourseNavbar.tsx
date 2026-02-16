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
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm z-50 relative">
      <CourseMobileSidebar course={course} progressCount={progressCount} />
      <NavbarRoutes />
    </div>
  );
};

export default CourseNavbar;
