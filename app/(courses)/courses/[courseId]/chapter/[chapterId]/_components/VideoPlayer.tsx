"use client";
import { useConfettiStore } from "@/hooks/use-confetti-store";
import { cn } from "@/lib/utils";
import MuxPlayer from "@mux/mux-player-react";
import axios from "axios";
import { Loader2, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

type Props = {
  chapterId: string;
  title: string;
  playbackId: string;
  courseId: string;
  nextChapterId?: string;
  isLocked: boolean;
  completeOnEnd: boolean;
};

const VideoPlayer = ({
  chapterId,
  title,
  playbackId,
  courseId,
  nextChapterId,
  isLocked,
  completeOnEnd,
}: Props) => {
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();
  const confetti = useConfettiStore();

  const onEnd = async () => {
    try {
      if (completeOnEnd) {
        await axios.put(
          `/api/course/${courseId}/chapter/${chapterId}/progress`,
          {
            isCompleted: true,
          }
        );
        if (!nextChapterId) {
          confetti.onOpen();
        }
        router.refresh();
        toast.success("Progress Updated");

        if (nextChapterId) {
          router.push(`/courses/${courseId}/chapter/${nextChapterId}`);
        }
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="relative aspect-video">
      {!isReady && !isLocked && (
        <div className="flex items-center justify-center absolute inset-0 bg-slate-800">
          <Loader2 className="w-8 h-8 animate-spin text-secondary" />
        </div>
      )}
      {isLocked && (
        <div className="flex items-center justify-center absolute inset-0 bg-slate-800">
          <Lock className="w-8 h-8" />
          <p className="text-sm">This chapter is Locked!</p>
        </div>
      )}
      {!isLocked && (
        <MuxPlayer
          className={cn(!isReady && "hidden")}
          onCanPlay={() => setIsReady(true)}
          onEnded={onEnd}
          autoPlay
          playbackId={playbackId}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
