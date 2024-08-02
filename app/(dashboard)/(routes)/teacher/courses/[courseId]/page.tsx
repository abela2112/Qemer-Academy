import { IconBadge } from "@/components/icon-badge";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { LayoutDashboard } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";
import CourseTitleForm from "../_components/title-form";
import CourseDiscriptionForm from "../_components/description-form";
import CourseImageForm from "../_components/image-upload";
import CourseCategoryForm from "../_components/courseCategory";

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

  const catagories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });
  console.log("catagories", catagories);
  if (!course) return redirect("/");

  const requireFields = [
    course.categoryId,
    course.description,
    course.title,
    course.image,
    course.price,
  ];

  const CompletedFields = requireFields.filter(Boolean).length;
  const CompletedText = `${CompletedFields}/${requireFields.length}`;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-medium">Course Setup</h1>
          <span className="text-sm text-slate-700">
            Completed all fields ({CompletedText})
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <div>
          <div className="flex items-center gap-x-2">
            <IconBadge icon={LayoutDashboard} />
            <h2 className="text-xl">Customise your course</h2>
          </div>
          <CourseTitleForm intialData={course} courseId={course.id} />
          <CourseDiscriptionForm courseId={course.id} intialData={course} />
          <CourseImageForm courseId={courseId} intialData={course} />
          <CourseCategoryForm
            options={catagories.map((catagory) => ({
              label: catagory.name,
              value: catagory.id,
            }))}
            courseId={courseId}
            intialData={course}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseIdPage;
