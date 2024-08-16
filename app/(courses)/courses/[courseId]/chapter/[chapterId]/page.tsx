import { getChapter } from "@/app/actions/getChapter";
import Banner from "@/components/banner";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import VideoPlayer from "./_components/VideoPlayer";
import CourseEnrollButton from "./_components/CourseEnrollButton";
import Preview from "@/components/Preview";
import { Separator } from "@/components/ui/separator";
import { File } from "lucide-react";
import CourseProgressButton from "./_components/CourseProgressButton";

type Props = {
  params: {
    courseId: string;
    chapterId: string;
  };
};

const ChapterIdPage = async ({ params: { courseId, chapterId } }: Props) => {
  const { userId } = auth();
  if (!userId) redirect("/");

  const {
    chapter,
    purchase,
    userProgress,
    course,
    attachments,
    muxData,
    nextChapter,
  } = await getChapter(courseId, chapterId, userId);
  if (!chapter || !course) redirect("/");
  const isLocked = !purchase && !chapter.isFree;
  const completeOnEnd = !!purchase && !!userProgress?.isCompleted;
  console.log("atachements", attachments);
  return (
    <div>
      {userProgress?.isCompleted && (
        <Banner variant={"success"} label="You have completed this chapter." />
      )}
      {isLocked && (
        <Banner
          variant={"warning"}
          label="You need to purchase this course to watch this chapter."
        />
      )}
      <div className="flex flex-col max-w-4xl mx-auto pb-20">
        <div className="p-4">
          <VideoPlayer
            chapterId={chapterId}
            title={chapter.title}
            playbackId={muxData?.playbackId!}
            courseId={courseId}
            nextChapterId={nextChapter?.id}
            isLocked={isLocked}
            completeOnEnd={completeOnEnd}
          />
        </div>
        <div>
          <div className="p-4 flex flex-col items-center justify-between md:flex-row">
            <h2 className="text-2xl font-semibold capitalize">
              {chapter.title}
            </h2>
            {purchase ? (
              <CourseProgressButton
                courseId={courseId}
                isCompleted={userProgress?.isCompleted!}
                chapterId={chapterId}
                nextChapterId={nextChapter?.id}
              />
            ) : (
              <CourseEnrollButton courseId={courseId} price={course.price!} />
            )}
          </div>
          <Separator />
          <div>
            <Preview value={chapter.description!} />
          </div>
          {!!attachments?.length && (
            <>
              <Separator />
              <div className="p-4 space-y-2">
                {attachments?.map((attachment) => (
                  <a
                    key={attachment.id}
                    href={attachment.url}
                    className="flex items-center p-3 w-full bg-sky-200 rounded-md text-sky-700 hover:underline "
                  >
                    <File />
                    <p className="line-clamp-1">{attachment.name}</p>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChapterIdPage;
