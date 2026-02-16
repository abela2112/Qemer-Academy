import { IconBadge } from "@/components/icon-badge";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface InfoCardProps {
  numberOfItems: number;
  variant?: "default" | "success";
  label: string;
  icon: LucideIcon;
}

export const InfoCard = ({
  variant,
  icon: Icon,
  numberOfItems,
  label,
}: InfoCardProps) => {
  return (
    <Card className="border-none shadow-md">
      <CardContent className="flex items-center gap-x-4 p-6">
        <div className={`p-3 rounded-full ${variant === "success" ? "bg-emerald-100" : "bg-sky-100"}`}>
            <IconBadge variant={variant} icon={Icon} />
        </div>
        <div>
          <p className="font-medium text-lg text-slate-700">{label}</p>
          <p className="text-gray-500 text-sm font-medium">
            {numberOfItems} {numberOfItems === 1 ? "Course" : "Courses"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
