"use client";
import { Button } from "@/components/ui/button";
import { useConfettiStore } from "@/hooks/use-confetti-store";
import axios from "axios";
import { CheckCircle, PlusCircle, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

type Props = {
  courseId: string;
  chapterId: string;
  isCompleted: boolean;
  nextChapterId?: string;
};

const CourseProgressButton = ({
  courseId,
  chapterId,
  isCompleted,
  nextChapterId,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const confetti = useConfettiStore();
  const router = useRouter();
  const onClick = async () => {
    try {
      setIsLoading(true);
      await axios.put(`/api/course/${courseId}/chapter/${chapterId}/progress`, {
        isCompleted: !isCompleted,
      });
      if (!isCompleted && !nextChapterId) {
        confetti.onOpen();
      }
      if (!isCompleted && nextChapterId) {
        router.push(`/courses/${courseId}/chapter/${nextChapterId}`);
      }
      router.refresh();
      toast.success("Progress Updated");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  const Icon = isCompleted ? XCircle : CheckCircle;
  return (
    <Button
      onClick={onClick}
      disabled={isLoading}
      className="w-full md:w-auto"
      variant={isCompleted ? "outline" : "success"}
    >
      {isCompleted ? "Mark As Incompleted" : "Mark As Complete"}
      <Icon className="w-4 h-4 ml-2" />
    </Button>
  );
};

export default CourseProgressButton;
