import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Mux from "@mux/mux-node";
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
