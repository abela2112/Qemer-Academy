import { Progress } from "@/components/ui/progress";
import { IconBadge } from "@/components/icon-badge";
import { formatPrice } from "@/lib/format";
import { BookOpen, Clock, Folder } from "lucide-react";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  id: string;
  title: string;
  price: number;
  chapterLength: number;
  imageUrl: string;
  category: string;
  progress: number | null;
};

const CourseCardItem = ({
  id,
  title,
  price,
  chapterLength,
  imageUrl,
  category,
  progress,
}: Props) => {
  return (
    <Link href={`/courses/${id}`}>
      <div className="group hover:shadow-lg transition overflow-hidden border border-slate-200 rounded-2xl bg-white h-full hover:scale-[1.02] duration-200 ease-in-out flex flex-col">
        <div className="relative w-full aspect-video overflow-hidden shadow-sm">
          <Image
            src={imageUrl || ""}
            alt={title}
            className="object-cover"
            fill
          />
        </div>

        <div className="flex flex-col px-4 pb-4 pt-4 flex-grow">
          <div className="text-lg font-bold group-hover:text-[#0077c0] transition line-clamp-2 mb-1 min-h-[56px]">
            {title}
          </div>
          <p className="text-sm text-slate-500 font-medium mb-4">{category}</p>

            {/* Metrics Row */}
          <div className="flex items-center gap-x-4 mb-4">
             {/* Chapters */}
            <div className="flex items-center gap-x-1.5 text-slate-500">
                <BookOpen className="w-4 h-4 text-slate-400" />
                <span className="font-semibold text-xs text-slate-600">
                  {chapterLength} {chapterLength === 1 ? "Chapter" : "Chapters"}
                </span>
            </div>
          </div>
          
          <div className="mt-auto">
            {progress !== null ? (
               <div className="flex items-center gap-x-3">
                   <Progress value={progress} className="h-2 flex-grow" variant="success" />
                   <span className="text-sm font-bold text-slate-700">
                       {Math.round(progress)}%
                   </span>
               </div>
            ) : (
              <p className="text-lg md:text-lg font-bold text-slate-700">
                {formatPrice(price)}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCardItem;
