import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Chapter, Course, UserProgress } from "@prisma/client";
import { Menu } from "lucide-react";
import React from "react";
import CourseSidebar from "./CourseSidebar";

type Props = {
  course: Course & {
    Chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
};

const CourseMobileSidebar = ({ course, progressCount }: Props) => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden hover:opacity-75 pr-4 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side={"left"} className="bg-white p-0 w-72">
        <CourseSidebar course={course} progressCount={progressCount} />
      </SheetContent>
    </Sheet>
  );
};

export default CourseMobileSidebar;
