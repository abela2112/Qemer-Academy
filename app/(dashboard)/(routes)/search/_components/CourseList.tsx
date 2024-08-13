import { Category, Course } from "@prisma/client";
import React from "react";
import CourseCardItem from "./CourseCardItem";

type CourseWithCategoriesandWithProgress = Course & {
  category: Category | null;
  progress: number | null;
  Chapters: { id: string }[];
};

const CourseList = ({
  items,
}: {
  items: CourseWithCategoriesandWithProgress[];
}) => {
  return (
    <div>
      <div>
        {items.map((item) => (
          <CourseCardItem />
        ))}
      </div>
      {items.length === 0 && (
        <div className="text-center text-muted-foreground mt-10">
          No Courses found
        </div>
      )}
    </div>
  );
};

export default CourseList;
