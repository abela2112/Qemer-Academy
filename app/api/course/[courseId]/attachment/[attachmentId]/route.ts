import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { courseId: string; attachmentId: string } }
) {
  try {
    const { userId } = auth();
    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const courseOwnerId = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId: userId,
      },
    });
    if (!courseOwnerId)
      return new NextResponse("Unauthorized", { status: 401 });
    const attachment = await db.attachment.delete({
      where: {
        id: params.attachmentId,
        courseId: params.courseId,
      },
    });
    return NextResponse.json(attachment);
  } catch (error) {
    console.log("{[course attachment error]}", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
