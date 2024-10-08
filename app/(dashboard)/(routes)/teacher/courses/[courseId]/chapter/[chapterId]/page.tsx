import { IconBadge } from "@/components/icon-badge";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { ArrowLeft, Eye, LayoutDashboard, Video } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

import React from "react";
import ChapterTitleForm from "./_components/title-form";
import ChapterDiscriptionForm from "./_components/description-form";
import ChapterAccessSettingForm from "./_components/Chapter-access-form";
import ChapterVideoForm from "./_components/chapter-video-upload";
import Banner from "@/components/banner";
import ChapterAction from "./_components/ChapterAction";


const ChapterIdPage = async ({
  params: { courseId, chapterId },
}: {
  params: { courseId: string; chapterId: string };
}) => {
  const { userId } = auth();
  if (!userId) return redirect("/");
  const chapter = await db.chapter.findUnique({
    where: {
      id: chapterId,
      courseId,
    },
    include: {
      muxData: true,
    },
  });
  if (!chapter) return redirect("/");
  const requiredField = [chapter.title, chapter.description, chapter.videoUrl];

  const completedField = requiredField.filter(Boolean).length;
  const totalField = requiredField.length;
  const completionText = `${completedField}/${totalField}`;
  const isComplete = requiredField.every(Boolean);
  return (
    <>
      {!chapter.isPublished && (
        <Banner
          variant={"warning"}
          label="This chapter is not published yet. Make sure to publish it after you have completed all the fields."
        />
      )}
      <div className="p-6 h-full">
        <div className="flex items-center justify-between">
          <div className="w-full">
            <Link
              href={`/teacher/courses/${courseId}`}
              className="flex items-center hover:opacity-75 text-sm transition mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Course Set up
            </Link>
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col gap-y-2 items-center">
                <h1 className="text-2xl font-medium">Course Chapters</h1>
                <span className="text-sm text-slate-700">
                  Complete all fields {completionText}
                </span>
              </div>
              <ChapterAction
                disabled={!isComplete}
                chapterId={chapterId}
                courseId={courseId}
                isPublished={chapter.isPublished}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={LayoutDashboard} />
                <h2 className="text-xl">Customize your chapter</h2>
              </div>
              <ChapterTitleForm
                intialData={chapter}
                courseId={courseId}
                chapterId={chapterId}
              />
              <ChapterDiscriptionForm
                intialData={chapter}
                courseId={courseId}
                chapterId={chapterId}
              />
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={Eye} />
                <h2 className="text-xl">Access Setting</h2>
              </div>
              <ChapterAccessSettingForm
                chapterId={chapterId}
                courseId={courseId}
                intialData={chapter}
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={Video} />
                <h2 className="text-xl">Customize your chapter</h2>
              </div>
              <ChapterVideoForm
                intialData={chapter}
                courseId={courseId}
                chapterId={chapterId}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChapterIdPage;
