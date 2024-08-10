import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { AlertTriangle, CheckCircleIcon } from "lucide-react";
const bannerVariants = cva(
  "flex items-center border p-4 w-full text-sm text-center",
  {
    variants: {
      variant: {
        warning: "bg-yellow-200/80 border-yellow-30 text-primary",
        success: "bg-emerald-700 border-emerald-800 text-secondary",
      },
    },
    defaultVariants: {
      variant: "warning",
    },
  }
);

interface BannerProps extends VariantProps<typeof bannerVariants> {
  label: string;
}
const iconMap = {
  success: AlertTriangle,
  warning: CheckCircleIcon,
};
const Banner = ({ variant, label }: BannerProps) => {
  const Icon = iconMap[variant || "warning"];
  return (
    <div className={cn(bannerVariants({ variant }))}>
      <Icon className="w-6 h-6 mr-2" />
      {label}
    </div>
  );
};

export default Banner;
