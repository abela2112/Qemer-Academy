import { db } from "@/lib/db";
import { Category, Course, Purchase } from "@prisma/client";
import { getProgress } from "./get-progress";

type CourseWithCategoriesandWithProgress = Course & {
  category: Category | null;
  progress: number | null;
  Chapters: { id: string }[];
};

type GetCourses = {
  categoryId?: string;
  title?: string;
  userId: string;
};

export const getCourses = async ({
  categoryId,
  title,
  userId,
}: GetCourses): Promise<CourseWithCategoriesandWithProgress[]> => {
  try {
    const courses = await db.course.findMany({
      where: {
        categoryId,
        isPublished: true,
        title: {
          contains: title,
        },
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
        purchases: {
          where: {
            userId: userId,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    const courseWithProgress: CourseWithCategoriesandWithProgress[] =
      await Promise.all(
        courses.map(async (course) => {
          if (course.purchases.length === 0) {
            return {
              ...course,
              progress: null,
            };
          }
          const progressPercentage = await getProgress(userId, course.id);
          return {
            ...course,
            progress: progressPercentage,
          };
        })
      );
    return courseWithProgress;
  } catch (error) {
    console.log("get courses error ", error);
    return [];
  }
};
