import { db } from "@/lib/db";
import { Category, Course } from "@prisma/client";
type CourseWithCategory = { category: Category | null } & Course;
export const getTopCourses = async (
  categoryId?: string,
  title?: string
): Promise<CourseWithCategory[]> => {
  try {
    const courses = await db.course.findMany({
      where: {
        isPublished: true,
        categoryId,
        title: {
          contains: title,
        },
      },
      include: {
        category: true,
      },
    });
    return courses;
  } catch (error) {
    console.error("getTopCourses error", error);
    return [];
  }
};
