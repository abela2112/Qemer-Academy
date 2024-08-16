import { db } from "@/lib/db";
import { Category, Chapter, Course } from "@prisma/client";
import { getProgress } from "./get-progress";

type CourseWithProgressAndCategory = Course & {
  Chapters: Chapter[];
  category: Category;
  progress: number | null;
};

type DashboardCourseProps = {
  completedCourses: CourseWithProgressAndCategory[];
  inProgressCourses: CourseWithProgressAndCategory[];
};
export const getDashboardCourse = async (
  userId: string
): Promise<DashboardCourseProps> => {
  try {
    const purchases = await db.purchase.findMany({
      where: {
        userId,
      },
      include: {
        course: {
          include: {
            category: true,
            Chapters: {
              where: {
                isPublished: true,
              },
            },
          },
        },
      },
    });
    const courses = purchases.map(
      (purchase) => purchase.course
    ) as CourseWithProgressAndCategory[];

    for (let course of courses) {
      const progress = await getProgress(userId, course.id);
      course["progress"] = progress;
    }
    const completedCourses = courses.filter(
      (course) => course.progress === 100
    );
    const inProgressCourses = courses.filter(
      (course) => (course.progress ?? 0) < 100
    );
    return {
      completedCourses,
      inProgressCourses,
    };
  } catch (error) {
    console.log("get Dashboard error", error);
    return {
      completedCourses: [],
      inProgressCourses: [],
    };
  }
};
