"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
type Props = {
  intialData: Course & { Chapters: Chapter[] };
  courseId: string;
};

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Chapter, Course } from "@prisma/client";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ChapterList from "./ChapterList";
const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
});
const CourseChapterForm = ({ intialData, courseId }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });
  const router = useRouter();
  const { isSubmitting, isValid } = form.formState;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post(`/api/course/${courseId}/chapter`, values);
      toast.success("Chapter Created successfully");
      toggleCreate();
      router.refresh();
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  const toggleCreate = () => setIsCreating((current) => !current);
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const onReorder = async (
    updateResult: { id: string; position: number }[]
  ) => {
    try {
      setIsUpdating(true);
      await axios.put(`api/course/${courseId}/chapter/reorder`, {
        list: updateResult,
      });
      toast.success("Chapters Reordered successfully");
      router.refresh();
    } catch (error) {
      toast.error("Error updating chapters");
    } finally {
      setIsUpdating(false);
    }
  };
  return (
    <div className="mt-6 bg-slate-100 rounded-md border p-4">
      <div className="font-medium flex item-center justify-between">
        Course Chapters
        <Button variant={"ghost"} onClick={toggleCreate}>
          {isCreating ? (
            <>Cancel</>
          ) : (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add a chapter
            </>
          )}
        </Button>
      </div>
      {/* {!isCreating && (
        <p
          className={cn(
            "text-sm mt-2",
            !intialData.description && "text-slate-500 italic"
          )}
        >
          {intialData.description || "No description"}
        </p>
      )} */}
      {isCreating && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isSubmitting}
                      placeholder="Introduction to course .."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={!isValid || isSubmitting} type="submit">
              Create
            </Button>
          </form>
        </Form>
      )}
      {!isCreating && (
        <div
          className={cn(
            "text-sm mt-2",
            !intialData.Chapters?.length && "text-slate-500 italic"
          )}
        >
          {!intialData.Chapters?.length && "No chapters"}
          {/* {TODO WITH CHAPTERS} */}
          <ChapterList
            onEdit={() => {}}
            onReorder={onReorder}
            items={intialData.Chapters || []}
          />
        </div>
      )}
      {!isCreating && (
        <p className="text-xs text-muted-foreground mt-4">
          Drag and Drop to reorder the chapters
        </p>
      )}
    </div>
  );
};

export default CourseChapterForm;
