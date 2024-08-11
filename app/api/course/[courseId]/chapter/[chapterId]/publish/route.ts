import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  {
    params: { courseId, chapterId },
  }: { params: { courseId: string; chapterId: string } }
) {
  try {
    const { userId } = auth();
    if (!userId) return new NextResponse("Unauthorized", { status: 401 });
    const ownCourse = await db.course.findUnique({
      where: {
        id: courseId,
        userId,
      },
    });
    if (!ownCourse) return new NextResponse("Unauthorized", { status: 401 });

    const chapter = await db.chapter.findUnique({
      where: {
        id: chapterId,
      },
    });
    const muxdata = await db.muxData.findUnique({
      where: {
        chapterId,
      },
    });
    if (
      !chapter ||
      !muxdata ||
      !chapter.title ||
      !chapter.description ||
      !chapter.videoUrl
    )
      return new NextResponse("Missing required fields", { status: 400 });
    const updatedChapter = await db.chapter.update({
      where: {
        id: chapterId,
      },
      data: {
        isPublished: true,
      },
    });
    return NextResponse.json(updatedChapter);
  } catch (error) {
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
