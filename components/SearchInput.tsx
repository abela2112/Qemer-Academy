"use client";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { useDebounce } from "@/hooks/use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import qs from "query-string";

import { cn } from "@/lib/utils";

const SearchInput = ({ className }: { className?: string } = {}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentCategoryId = searchParams.get("categoryId");
  const currentTitle = searchParams.get("title");

  const [value, setValue] = useState(currentTitle || "");
  const debouncedValue = useDebounce(value);

  useEffect(() => {
    // If not on search page and no search term, do nothing
    if (!pathname.includes("/search") && !pathname.includes("/courses") && !debouncedValue) {
      return;
    }

    // Determine target path: always /search unless we are there or on courses page
    const targetPath = pathname.includes("/search") || pathname.includes("/courses") ? pathname : "/search";

    const url = qs.stringifyUrl(
      {
        url: targetPath,
        query: {
          categoryId: currentCategoryId,
          title: debouncedValue,
        },
      },
      { skipNull: true, skipEmptyString: true }
    );

    router.push(url);
  }, [debouncedValue, currentCategoryId, router, pathname]);

  return (
    <div className="relative">
      <Search className="h-4 w-4 absolute top-3 left-3 text-slate-600" />
      <Input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className={cn(
          "w-full md:w-[300px] pl-9 rounded-full bg-slate-100 focus-visible:ring-slate-200",
          className
        )}
        placeholder="Search for courses"
      />
    </div>
  );
};

export default SearchInput;
