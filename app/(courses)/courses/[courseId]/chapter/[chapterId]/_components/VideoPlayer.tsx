"use client";
import { cn } from "@/lib/utils";
import MuxPlayer from "@mux/mux-player-react";
import { Loader2, Lock } from "lucide-react";
import React, { useState } from "react";

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
          onEnded={() => {}}
          autoPlay
          playbackId={playbackId}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
