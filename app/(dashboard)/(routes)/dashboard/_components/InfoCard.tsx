import { IconBadge } from "@/components/icon-badge";
import { LucideIcon } from "lucide-react";
import React from "react";

type Props = {
  variant?: "default" | "success";
  icon: LucideIcon;
  label: string;
  noOfItems: number;
};

const InfoCard = ({ variant, icon: Icon, label, noOfItems }: Props) => {
  return (
    <div className="flex items-center border rounded-md p-3 gap-x-2">
      <IconBadge icon={Icon} variant={variant || "default"} />
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-gray-500 text-sm">
          {noOfItems} {noOfItems === 1 ? "Course" : "Courses"}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
