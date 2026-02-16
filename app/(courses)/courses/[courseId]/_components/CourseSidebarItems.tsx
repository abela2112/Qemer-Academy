"use client";
import { cn } from "@/lib/utils";
import { CheckCircle, Lock, PlayCircle } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = {
  id: string;
  label: string;
  isCompleted: boolean;
  isLocked: boolean;
  courseId: string;
};

const CourseSidebarItems = ({
  id,
  label,
  courseId,
  isCompleted,
  isLocked,
}: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = pathname.includes(id);
  const Icon = isLocked ? Lock : isCompleted ? CheckCircle : PlayCircle;
  const onClick = () => router.push(`/courses/${courseId}/chapter/${id}`);
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-slate-400 text-sm font-[500] pl-6 transition-all hover:text-slate-300 hover:bg-slate-300/10",
        isActive &&
          "text-sky-400 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-400",
        isCompleted && "text-emerald-400 hover:text-emerald-400",
        isCompleted && isActive && "bg-emerald-200/20"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn(
            "text-slate-400",
            isActive && "text-sky-400",
            isCompleted && "text-emerald-400"
          )}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-sky-400 h-full transition-all",
          isActive && "opacity-100",
          isCompleted && "border-emerald-400"
        )}
      />
    </button>
  );
};

export default CourseSidebarItems;
