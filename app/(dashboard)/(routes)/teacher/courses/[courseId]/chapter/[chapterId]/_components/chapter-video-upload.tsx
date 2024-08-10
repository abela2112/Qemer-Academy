"use client";
import axios from "axios";
import { useState } from "react";
import { z } from "zod";
import MuxPlayer from "@mux/mux-player-react";
type Props = {
  intialData: Chapter & { muxData?: MuxData | null };
  courseId: string;
  chapterId: string;
};

import FileUpload from "@/components/file-upload";
import { Button } from "@/components/ui/button";
import { Chapter, MuxData } from "@prisma/client";
import { Pencil, PlusCircle, Video } from "lucide-react";
import { CldVideoPlayer } from "next-cloudinary";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const formSchema = z.object({
  videoUrl: z.string(),
});
const ChapterVideoForm = ({ intialData, chapterId, courseId }: Props) => {
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/course/${courseId}/chapter/${chapterId}`, values);
      console.log("values updated", values);
      toast.success("Chapter Updated successfully");
      toggleEdit();
      router.refresh();
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  const toggleEdit = () => setIsEditting((current) => !current);
  const [isEditting, setIsEditting] = useState(false);
  console.log("video", intialData.videoUrl);
  return (
    <div className="mt-6 bg-slate-100 rounded-md border p-4">
      <div className="font-medium flex item-center justify-between">
        Chapter Video
        <Button variant={"ghost"} onClick={toggleEdit}>
          {isEditting && <>Cancel</>}
          {!isEditting && !intialData?.videoUrl && (
            <>
              <PlusCircle className="w-4 h-4 mr-2" />
              Add Video
            </>
          )}
          {!isEditting && intialData?.videoUrl && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit Video
            </>
          )}
        </Button>
      </div>
      {!isEditting && !intialData.videoUrl && (
        <div className="h-60  bg-slate-200 flex items-center justify-center rounded-md">
          <Video className="h-10 w-10 text-slate-500" />
        </div>
      )}

      {!isEditting && intialData.videoUrl && (
        <div className="relative aspect-video rounded-md mt-2">
          {/* <CldVideoPlayer
            src={intialData.videoUrl!}
            width={1600}
            height={900}
            autoPlay
            aspectRatio="video"
            className="object-cover rounded-md"
          /> */}
          <MuxPlayer playbackId={intialData.muxData?.playbackId || ""} />
          Viedo can take a few minutes to load .Refresh the page if the video
          does not apear
        </div>
      )}
      {isEditting && (
        <div>
          <FileUpload
            endpoint="courseImage"
            onChange={(url) => {
              console.log(`Uploading image: ${url}`);
              onSubmit({ videoUrl: url! });
            }}
          />
          <div className="text-xs text-muted-foreground mt-4 ">
            {/* 16:9 aspect ratio recommended */}
            Upload this chapters video
          </div>
        </div>
      )}
    </div>
  );
};

export default ChapterVideoForm;
