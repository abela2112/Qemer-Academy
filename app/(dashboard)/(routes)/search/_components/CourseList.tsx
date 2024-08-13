"use client";
import { Category, Course } from "@prisma/client";

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
  console.log("CourseList", items);
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        {items.map((item) => (
          <CourseCardItem
            key={item.id}
            id={item.id}
            title={item.title}
            imageUrl={item.image!}
            progress={item.progress!}
            chapterLength={item.Chapters.length}
            price={item.price!}
            category={item.category?.name!}
          />
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
