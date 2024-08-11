import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Mux from "@mux/mux-node";

export async function DELETE(
  req: Request,
  {
    params: { courseId, chapterId },
  }: { params: { chapterId: string; courseId: string } }
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
    if (!chapter) return new NextResponse("Not Found", { status: 404 });
    const existingVideo = await db.muxData.findFirst({
      where: {
        chapterId: chapterId,
      },
    });
    const { video } = new Mux({
      tokenId: process.env.MUX_TOKEN_ID,
      tokenSecret: process.env.MUX_TOKEN_SECRET,
    });
    if (existingVideo) {
      await video.assets.delete(existingVideo.assetId);
      await db.muxData.delete({
        where: {
          id: existingVideo.id,
        },
      });
    }
    const deletedChapter = await db.chapter.delete({
      where: {
        id: chapterId,
      },
    });
    const publishedChaptersInCourse = await db.chapter.findMany({
      where: {
        id: courseId,
        isPublished: true,
      },
    });
    if (!publishedChaptersInCourse.length) {
      await db.course.update({
        where: {
          id: courseId,
        },
        data: {
          isPublished: false,
        },
      });
    }
    return NextResponse.json(deletedChapter);
  } catch (error) {
    console.log("[chapter delete error]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
export async function PATCH(
  req: Request,
  {
    params: { courseId, chapterId },
  }: { params: { chapterId: string; courseId: string } }
) {
  try {
    const { userId } = auth();
    if (!userId) return new NextResponse("Unauthorized", { status: 401 });
    const { video } = new Mux({
      tokenId: process.env.MUX_TOKEN_ID,
      tokenSecret: process.env.MUX_TOKEN_SECRET,
    });
    const ownCourse = await db.course.findUnique({
      where: {
        id: courseId,
        userId,
      },
    });
    if (!ownCourse) return new NextResponse("Unauthorized", { status: 401 });
    const { isPublished, ...values } = await req.json();

    console.log("Success values: " + values);
    const chapter = await db.chapter.update({
      where: {
        id: chapterId,
      },
      data: {
        ...values,
      },
    });
    if (values.videoUrl) {
      const existingVideo = await db.muxData.findUnique({
        where: {
          chapterId: chapterId,
        },
      });
      if (existingVideo) {
        await video.assets.delete(existingVideo.assetId);
        await db.muxData.delete({
          where: {
            id: existingVideo.id,
          },
        });
      }
      const asset = await video.assets.create({
        test: false,
        playback_policy: ["public"],
        input: values.videoUrl,
      });
      await db.muxData.create({
        data: {
          assetId: asset.id,
          chapterId,
          playbackId: asset.playback_ids?.[0].id!,
        },
      });
    }

    return NextResponse.json(chapter);
  } catch (error) {
    console.log("[chapter update error]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
