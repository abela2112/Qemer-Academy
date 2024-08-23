"use client";
import { cn } from "@/lib/utils";
import { Category } from "@prisma/client";
import React from "react";
type CategoryItemProps = {
  category: Category;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};
const CategoryItem = ({
  category,
  selected,
  setSelected,
}: CategoryItemProps) => {
  const isActive = category.name === selected;
  const onClick = () => {
    setSelected(category.name);
  };
  return (
    <div className={cn(isActive && "border-b-2 border-primary transition")}>
      <button
        onClick={onClick}
        key={category.id}
        className="text-sm font-medium text-slate-600 hover:text-slate-900 rounded-md px-4 py-2 flex items-center gap-x-2"
        type="button"
      >
        <div className="truncate">{category.name}</div>
      </button>
    </div>
  );
};

export default CategoryItem;
