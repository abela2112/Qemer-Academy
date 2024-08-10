"use client";

import COnfirmDialog from "@/components/modals/confirm-dialog";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface ChapterActionProps {
  disabled: boolean;
  courseId: string;
  chapterId: string;
  isPublished: boolean;
}

const ChapterAction = ({
  disabled,
  courseId,
  chapterId,
  isPublished,
}: ChapterActionProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const onDelete = async () => {
    try {
      setIsLoading(true);
      await axios.delete(`/api/course/${courseId}/chapter/${chapterId}`);
      toast.success("Chapter Deleted");
      router.push(`/teacher/course/${courseId}`);
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
        onClick={() => {}}
      >
        {isPublished ? "UnPublish" : "Publish"}
      </Button>
      <COnfirmDialog onConfirm={onDelete}>
        <Button size={"sm"} onClick={() => {}}>
          <Trash className="w-4 h-4" />
        </Button>
      </COnfirmDialog>
    </div>
  );
};

export default ChapterAction;
