import { db } from "@/lib/db";
import { Category, Course } from "@prisma/client";
type CourseWithCategory = { category: Category | null; Chapters: { id: string }[] } & Course;

export const getTopCourses = async (
  categoryId?: string,
  title?: string
): Promise<CourseWithCategory[]> => {
  try {
    const courses = await db.course.findMany({
      where: {
        isPublished: true,
        categoryId,
        ...(title ? { title: { contains: title, mode: "insensitive" } } : {}),
      },
      include: {
        category: true,
        Chapters: {
          where: {
            isPublished: true,
          },
          select: {
            id: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return courses;
  } catch (error) {
    console.error("getTopCourses error", error);
    return [];
  }
};
