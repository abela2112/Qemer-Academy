"use client";
import React, { useState } from "react";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
type Props = {
  intialData: Course;
  courseId: string;
};

import {
  FormControl,
  Form,
  FormField,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ImageIcon, Pencil, PlusCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Course } from "@prisma/client";
import Image from "next/image";
import FileUpload from "@/components/file-upload";
const formSchema = z.object({
  image: z.string().min(1, {
    message: "Image is required",
  }),
});
const CourseImageForm = ({ intialData, courseId }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: intialData?.image || "",
    },
  });
  const router = useRouter();
  const { isSubmitting, isValid } = form.formState;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/course/${courseId}`, values);
      toast.success("Course Updated successfully");
      toggleEdit();
      router.refresh();
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  const toggleEdit = () => setIsEditting((current) => !current);
  const [isEditting, setIsEditting] = useState(false);
  console.log("image", intialData.image);
  return (
    <div className="mt-6 bg-slate-100 rounded-md border p-4">
      <div className="font-medium flex item-center justify-between">
        Course Image
        <Button variant={"ghost"} onClick={toggleEdit}>
          {isEditting && <>Cancel</>}
          {!isEditting && !intialData?.image && (
            <>
              <PlusCircle className="w-4 h-4 mr-2" />
              Add Image
            </>
          )}
          {!isEditting && intialData?.image && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit Image
            </>
          )}
        </Button>
      </div>
      {!isEditting && !intialData.image && (
        <div className="h-60  bg-slate-200 flex items-center justify-center rounded-md">
          <ImageIcon className="h-10 w-10 text-slate-500" />
        </div>
      )}

      {!isEditting && intialData.image && (
        <div className="aspect-video rounded-md mt-2">
          <Image
            src={intialData.image!}
            fill
            alt="Course Image"
            className="object-cover rounded-md"
          />
        </div>
      )}
      {isEditting && (
        <div>
          <FileUpload
            endpoint="courseImage"
            onChange={(url) => {
              onSubmit({ image: url! });
              console.log(`Uploading image: ${url}`);
            }}
          />
          <div className="text-xs text-muted-foreground mt-4 ">
            16:9 aspect ratio recommended
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseImageForm;
