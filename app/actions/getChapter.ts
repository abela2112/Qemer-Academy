import { db } from "@/lib/db";
import { Attachment, Chapter, MuxData } from "@prisma/client";

export const getChapter = async (
  courseId: string,
  chapterId: string,
  userId: string
) => {
  try {
    if (!courseId || !chapterId || courseId.length !== 24 || chapterId.length !== 24) {
      throw new Error(`Invalid Course ID or Chapter ID`);
    }

    const purchase = await db.purchase.findUnique({
      where: {
        userId_courseId: {
          userId,
          courseId,
        },
      },
    });

    const course = await db.course.findUnique({
      where: {
        id: courseId,
        isPublished: true,
      },
      select: {
        price: true,
        title: true,
      },
    });

    const chapter = await db.chapter.findUnique({
      where: {
        id: chapterId,
        isPublished: true,
      },
    });
    if (!chapter || !course) {
      throw new Error(`Course and Chapter not found`);
    }
    let attachments: Attachment[] | null = null;
    let muxData: MuxData | null = null;
    let nextChapter: Chapter | null = null;

    if (chapter?.isFree || purchase) {
      attachments = await db.attachment.findMany({
        where: {
          courseId,
        },
      });
    }
    if (chapter?.isFree || purchase) {
      muxData = await db.muxData.findUnique({
        where: {
          chapterId,
        },
      });
      nextChapter = await db.chapter.findFirst({
        where: {
          courseId,
          position: {
            gt: chapter.position,
          },
        },
        orderBy: {
          position: "asc",
        },
      });
    }
    const userProgress = await db.userProgress.findUnique({
      where: {
        chapterId_userId: {
          userId,
          chapterId,
        },
      },
    });
    return {
      chapter,
      purchase,
      userProgress,
      course,
      attachments,
      muxData,
      nextChapter,
    };
  } catch (error) {
    console.group("GetChapter error", error);
    return {
      chapter: null,
      purchase: null,
      userProgress: null,
      course: null,
      attachments: null,
      muxData: null,
      nextChapter: null,
    };
  }
};
