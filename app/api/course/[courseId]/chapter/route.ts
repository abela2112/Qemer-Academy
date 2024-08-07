import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = auth();
    if (!userId) return new NextResponse("Unauthorized User", { status: 401 });

    const courseOwner = await db.course.findUnique({
      where: {
        userId,
        id: params.courseId,
      },
    });
    if (!courseOwner)
      return new NextResponse("Unauthorized User", { status: 401 });
    const { title } = await req.json();
    const lastChapter = await db.chapter.findFirst({
      where: {
        courseId: params.courseId,
      },
      orderBy: {
        position: "desc",
      },
    });
    const newPosition = lastChapter ? lastChapter.position + 1 : 1;
    const chapter = await db.chapter.create({
      data: { title, courseId: params.courseId, position: newPosition },
    });
    return NextResponse.json(chapter);
  } catch (error) {
    console.log("[COURSE CHAPTER ERROR]", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
