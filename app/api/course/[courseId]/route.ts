import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = auth();
    const { courseId } = params;
    if (!userId) {
      return new NextResponse("UnAuthorized User", { status: 401 });
    }
    const values = await req.json();
    await db.course.update({
      where: {
        id: courseId,
        userId,
      },
      data: {
        ...values,
      },
    });
    return new NextResponse("success", { status: 200 });
  } catch (error) {
    return new NextResponse("INTERNAL ERROR", { status: 500 });
  }
}
