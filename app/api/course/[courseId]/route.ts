import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Mux from "@mux/mux-node";
import { NextResponse } from "next/server";

const { video } = new Mux({
  tokenId: process.env.MUX_TOKEN_ID!,
  tokenSecret: process.env.MUX_TOKEN_SECRET!,
});
export async function DELETE(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = auth();
    const { courseId } = params;
    if (!userId) {
      return new NextResponse("UnAuthorized User", { status: 401 });
    }
    const ownCourse = await db.course.findUnique({
      where: {
        id: courseId,
        userId,
      },
    });
    if (!ownCourse) {
      return new NextResponse("UnAuthorized User", { status: 401 });
    }
    const course = await db.course.findUnique({
      where: { id: courseId },
      include: {
        Chapters: {
          include: {
            muxData: true,
          },
        },
      },
    });
    if (!course) {
      return new NextResponse("Course not found", { status: 404 });
    }
    for (const chapter of course.Chapters) {
      if (chapter?.muxData?.assetId) {
        await video.assets.delete(chapter.muxData.assetId);
        // await db.muxData.delete({
        //   where: {
        //     id: chapter.muxData.id,
        //   },
        // });
      }
    }
    const deletedCourse = await db.course.delete({
      where: {
        id: courseId,
        userId,
      },
    });
    return NextResponse.json(deletedCourse);
  } catch (error) {
    console.log("[course delete error]", error);
    return new NextResponse("INTERNAL ERROR", { status: 500 });
  }
}

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
