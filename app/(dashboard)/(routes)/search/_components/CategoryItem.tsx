"use client";
import { cn } from "@/lib/utils";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import React from "react";
import { IconType } from "react-icons";
import qs from "query-string";
type Props = {
  value: string;
  label?: string;
  icon?: IconType;
};

const CategoryItem = ({ value, label, icon: Icon }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryId = searchParams.get("categoryId");
  const currentTitle = searchParams.get("title");

  const isSelected = categoryId === value;
  const onClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          title: currentTitle,
          categoryId: isSelected ? null : value,
        },
      },
      { skipNull: true, skipEmptyString: true }
    );
    router.push(url);
  };
  return (
    <button
      onClick={onClick}
      role="tab"
      aria-selected={isSelected}
      type="button"
      className={cn(
        // Base styles - increased padding and added font weight
        "py-2 px-5 min-w-max rounded-full border flex items-center gap-x-2 text-sm font-[600] transition-all duration-300 ease-in-out select-none shadow-sm",
        
        // Default State (Inactive) - More contrast
        !isSelected && "bg-white border-slate-200 text-slate-700 hover:border-sky-400 hover:text-sky-800 hover:-translate-y-0.5 hover:shadow-md hover:bg-sky-50",
        
        // Active State - Stronger pop
        isSelected && "bg-sky-700 border-sky-800 text-white shadow-lg ring-2 ring-sky-700/20 ring-offset-2 scale-105",
        
        // Interactive / Press
        "active:scale-95 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
      )}
    >
      {/* Icon sizing and animation */}
      {Icon && <Icon size={18} className={cn("transition-transform duration-300", isSelected && "scale-110")} />}
      
      <span className="truncate">{label}</span>
      
      {/* Subtle indicator dot for active state */}
      {isSelected && (
        <span className="ml-1.5 w-1.5 h-1.5 rounded-full bg-white opacity-90 animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
      )}
    </button>
  );
};

export default CategoryItem;
