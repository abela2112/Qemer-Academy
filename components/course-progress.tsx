import React from "react";
import { Progress } from "./ui/progress";
import { cn } from "@/lib/utils";

type Props = {
  // Add props here
  value: number;
  variant?: "default" | "success";
  size?: "default" | "sm";
};

const colorVariant = {
  default: "text-sky-700",
  success: "text-emerald-700",
};
const sizeVariant = {
  default: "text-sm",
  sm: "text-xs",
};
const CourseProgress = ({ value, variant, size }: Props) => {
  return (
    <div>
      <Progress variant={variant} className="h-2" value={value} />
      <p
        className={cn(
          "font-medium mt-2 text-sky-700",
          colorVariant[variant || "default"],
          sizeVariant[size || "default"]
        )}
      >
        {Math.round(value)}% Complete
      </p>
    </div>
  );
};

export default CourseProgress;
