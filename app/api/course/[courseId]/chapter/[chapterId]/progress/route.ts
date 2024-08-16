import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  {
    params: { courseId, chapterId },
  }: { params: { courseId: string; chapterId: string } }
) {
  try {
    const { userId } = auth();
    if (!userId) return new Response("Unauthorized", { status: 401 });
    const { isCompleted } = await req.json();
    const userProgress = await db.userProgress.upsert({
      where: {
        chapterId_userId: {
          userId,
          chapterId,
        },
      },
      update: {
        isCompleted,
      },
      create: {
        chapterId,
        userId,
        isCompleted,
      },
    });
    return NextResponse.json(userProgress);
  } catch (error) {
    console.log("COurse progress error", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }

  //   return new Response(JSON.stringify(chapter), { status: 200 });
}
