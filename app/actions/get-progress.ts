import { db } from "@/lib/db";

export const getProgress = async (
  userId: string,
  courseId: string
): Promise<number> => {
  try {
    const PublishedChapter = await db.chapter.findMany({
      where: {
        courseId: courseId,
        isPublished: true,
      },
      select: {
        id: true,
      },
    });
    const publishedChapterIds = PublishedChapter.map((chapter) => chapter.id);
    const validCompletedChapterIds = await db.userProgress.count({
      where: {
        userId: userId,
        chapterId: {
          in: publishedChapterIds,
        },
        isCompleted: true,
      },
    });
    const progressPercentage =
      (validCompletedChapterIds / publishedChapterIds.length) * 100;
    return progressPercentage;
  } catch (error) {
    console.log("get course progress error ", error);
    return 0;
  }
};
