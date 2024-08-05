import CourseAttachmentForm from "@/app/(dashboard)/(routes)/teacher/courses/_components/Attachment";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params: { courseId } }: { params: { courseId: string } }
) {
  try {
    const { userId } = auth();
    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const courseOwner = await db.course.findUnique({
      where: {
        id: courseId,
        userId: userId,
      },
    });

    if (!courseOwner) return new NextResponse("Unauthorized", { status: 401 });
    const { url } = await req.json();

    const attachment = await db.attachment.create({
      data: {
        url: url,
        name: url.split("/").pop(),
        courseId,
      },
    });
    return NextResponse.json(attachment);
  } catch (error) {
    return new NextResponse("Internal Server Error ", { status: 500 });
  }
}
