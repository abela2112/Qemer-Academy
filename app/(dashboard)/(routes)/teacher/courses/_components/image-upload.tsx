"use client";
import axios from "axios";
import { useState } from "react";
import { z } from "zod";
type Props = {
  intialData: Course;
  courseId: string;
};

import FileUpload from "@/components/file-upload";
import { Button } from "@/components/ui/button";
import { Course } from "@prisma/client";
import { ImageIcon, Pencil, PlusCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const formSchema = z.object({
  image: z.string().min(1, {
    message: "Image is required",
  }),
});
const CourseImageForm = ({ intialData, courseId }: Props) => {
  const router = useRouter();

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
