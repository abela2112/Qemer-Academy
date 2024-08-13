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
      className={cn(
        "py-2 px-3 rounded-full flex items-center gap-x-1 border border-slate-200 text-sm hover:border-sky-500 transition",
        isSelected && "bg-sky-200/20 border-sky-700 text-sky-800 "
      )}
      type="button"
    >
      {Icon && <Icon size={20} />}
      <div className="truncate">{label}</div>
    </button>
  );
};

export default CategoryItem;
