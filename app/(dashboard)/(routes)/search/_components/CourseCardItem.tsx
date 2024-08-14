import { IconBadge } from "@/components/icon-badge";
import { formatPrice } from "@/lib/format";
import { BookOpen } from "lucide-react";
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
  progress: number;
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
      <div className="group hover:shadow-sm border p-3 overflow-hidden h-full transition rounded-lg">
        <div className="relative w-full aspect-video overflow-hidden rounded-md">
          <Image
            src={imageUrl || ""}
            alt={title}
            className="object-cover"
            fill
          />
        </div>
        <div className="flex flex-col pt-2">
          <div className="md:text-base text-lg font-medium group-hover:text-sky-700 transition line-clamp-1">
            {title}
          </div>
          <p className="text-xs text-muted-foreground">{category}</p>

          <div className="flex items-center gap-x-2 text-sm md:text-xs">
            <div className="flex items-center gap-x-1 text-slate-500">
              <IconBadge size={"sm"} icon={BookOpen} />
              <span>
                {chapterLength} {chapterLength === 1 ? "Chapter" : "Chapters"}
              </span>
            </div>
          </div>
          <div>
            {progress !== null ? (
              <div>TODO WITH PRogree</div>
            ) : (
              <p className="text-md md:text-sm text-slate-700 font-medium">
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
