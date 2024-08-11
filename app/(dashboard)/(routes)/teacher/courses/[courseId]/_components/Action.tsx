"use client";

import ConfirmDialog from "@/components/modals/confirm-dialog";
import COnfirmDialog from "@/components/modals/confirm-dialog";
import { Button } from "@/components/ui/button";
import { useConfettiStore } from "@/hooks/use-confetti-store";
import axios from "axios";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface ActionProps {
  disabled: boolean;
  courseId: string;

  isPublished: boolean;
}

const Action = ({ disabled, courseId, isPublished }: ActionProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const confetti = useConfettiStore();
  const router = useRouter();
  const onDelete = async () => {
    try {
      setIsLoading(true);
      await axios.delete(`/api/course/${courseId}`);
      toast.success("Course Deleted");
      router.push(`/teacher/courses`);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  const onClick = async () => {
    try {
      setIsLoading(true);
      if (isPublished) {
        await axios.patch(`/api/course/${courseId}/unpublish`);
        toast.success("Course unPublished");
      } else {
        await axios.patch(`/api/course/${courseId}/publish`);
        toast.success("Course Published");
        confetti.onOpen();
      }
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex items-center gap-x-2">
      <Button
        disabled={disabled || isLoading}
        variant={"outline"}
        size={"sm"}
        onClick={onClick}
      >
        {isPublished ? "UnPublish" : "Publish"}
      </Button>
      <ConfirmDialog onConfirm={onDelete}>
        <Button size={"sm"} onClick={() => {}}>
          <Trash className="w-4 h-4" />
        </Button>
      </ConfirmDialog>
    </div>
  );
};

export default Action;
