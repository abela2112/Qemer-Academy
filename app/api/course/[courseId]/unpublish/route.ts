import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params: { courseId } }: { params: { courseId: string } }
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
    const course = await db.course.findUnique({
      where: {
        id: courseId,
      },
    });
    if (!course) {
      return new NextResponse("Course not found", { status: 404 });
    }

    const updatedCourse = await db.course.update({
      where: {
        id: courseId,
        userId,
      },
      data: {
        isPublished: false,
      },
    });

    return NextResponse.json(updatedCourse);
  } catch (error) {
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
