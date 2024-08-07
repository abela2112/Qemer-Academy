"use client";
import { Chapter } from "@prisma/client";
import React, { useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "@hello-pangea/dnd";
import { cn } from "@/lib/utils";
import { Grip, Pencil } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ChapterListProps {
  onEdit: (id: string) => void;
  onReorder: (updatedData: { id: string; position: number }[]) => void;
  items: Chapter[];
}

const ChapterList = ({ onEdit, onReorder, items }: ChapterListProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [chapters, setChapters] = useState(items);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    setChapters(items);
  }, [items]);
  const onDragEnd = (result: DropResult) => {
    console.log(result);
    const items = Array.from(chapters);
    const [reorderedItem] = items.splice(result.source.index, 1);

    if (result.destination) {
      items.splice(result.destination.index, 0, reorderedItem);

      const startIndex = Math.min(
        result.source.index,
        result.destination.index
      );
      const endIndex = Math.max(result.source.index, result.destination.index);
      setChapters(items);
      const updatedChapters = items.slice(startIndex, endIndex + 1);
      const bulkUpdateData = updatedChapters.map((chapters) => ({
        id: chapters.id,
        position: items.findIndex((item) => item.id === chapters.id),
      }));
      onReorder(bulkUpdateData);
    }
  };
  if (!isMounted) return null;
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="chapters">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {chapters.map((chapter, index) => (
              <Draggable
                key={chapter.id}
                index={index}
                draggableId={chapter.id}
              >
                {(provided) => (
                  <div
                    className={cn(
                      "flex items-center gap-x-2 border-slate-200 bg-slate-200 text-slate-700 rounded-md border text-sm mb-4",
                      chapter.isPublished &&
                        "bg-sky-100 border-sky-200 text-sky-700"
                    )}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                  >
                    <div
                      className={cn(
                        "px-2 py-3 border-r border-r-slate-200 hover:bg-slate-300 transition rounded-l-md ",
                        chapter.isPublished && "bg-sky-200 border-r-sky-200"
                      )}
                      {...provided.dragHandleProps}
                    >
                      <Grip className="w-5 h-5" />
                    </div>
                    {chapter.title}
                    <div className="flex items-center ml-auto pr-2 gap-x-2">
                      {chapter.isFree && <Badge>Free</Badge>}
                      <Badge
                        className={cn(
                          "bg-slate-500",
                          chapter.isPublished && "bg-sky-700"
                        )}
                      >
                        {chapter.isPublished ? "Published" : "Draft"}
                      </Badge>
                      <Pencil
                        onClick={() => onEdit(chapter.id)}
                        className="h-4 w-4 hover:opacity-75 cursor-pointer transition"
                      />
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ChapterList;
