"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarRouteItemsProps {
  icon: LucideIcon;
  label: string;
  href: string;
}
const SidebarRouteItems = ({
  icon: Icon,
  label,
  href,
}: SidebarRouteItemsProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname.startsWith(`${href}/`);
  const onClick = () => router.push(href);
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center gap-x-2 text-gray-400 text-sm font-medium pl-6 py-3 transition-all rounded-lg mb-1 hover:text-white hover:bg-white/10",
        isActive &&
          "text-slate-900 bg-emerald-50 hover:bg-emerald-100 hover:text-slate-900 shadow-sm"
      )}
    >
      <Icon
          size={22}
          className={cn("text-gray-400", isActive && "text-slate-900")}
      />
      {label}
    </button>
  );
};

export default SidebarRouteItems;
