"use client";
import axios from "axios";
import { useState } from "react";
import { z } from "zod";
type Props = {
  intialData: Course & { attachment: Attachment[] };
  courseId: string;
};

import FileUpload from "@/components/file-upload";
import { Button } from "@/components/ui/button";
import { Attachment, Course } from "@prisma/client";
import { File, Loader2, Pencil, PlusCircle, X } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const formSchema = z.object({
  url: z.string().min(1),
});
const CourseAttachmentForm = ({ intialData, courseId }: Props) => {
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post(`/api/course/${courseId}/attachment`, values);
      toast.success("Course Updated successfully");
      toggleEdit();
      router.refresh();
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  const onDelete = async (id: string) => {
    try {
      setDeletingId(id);
      await axios.delete(`/api/course/${courseId}/attachment/${id}`);
      toast.success("Attachment deleted successfully");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setDeletingId(null);
    }
  };
  const toggleEdit = () => setIsEditting((current) => !current);
  const [isEditting, setIsEditting] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>();
  return (
    <div className="mt-6 bg-slate-100 rounded-md border p-4">
      <div className="font-medium flex item-center justify-between">
        Course Attachment
        <Button variant={"ghost"} onClick={toggleEdit}>
          {isEditting && <>Cancel</>}
          {!isEditting && !intialData?.attachment && (
            <>
              <PlusCircle className="w-4 h-4 mr-2" />
              Add Attachmnet
            </>
          )}
          {!isEditting && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit Attachment
            </>
          )}
        </Button>
      </div>
      {!isEditting && intialData.attachment.length === 0 && (
        <p className="text-sm text-slate-500 mt-2">No Attachments yet</p>
        // <div className="h-60  bg-slate-200 flex items-center justify-center rounded-md">
        //   <ImageIcon className="h-10 w-10 text-slate-500" />
        // </div>
      )}

      {!isEditting && intialData.attachment.length > 0 && (
        <div className="space-y-2">
          {intialData.attachment.map((attachment) => (
            <div
              key={attachment.id}
              className="flex items-center p-3 bg-sky-100 border-sky-200 border text-sky-700 rounded-md"
            >
              <File className="h-4 w-4 mr-2 flex-shrink-0" />
              <p className="text-xs line-clamp-1">{attachment.name}</p>
              {deletingId === attachment.id && (
                <div>
                  {" "}
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              )}
              {deletingId !== attachment.id && (
                <Button
                  onClick={() => onDelete(attachment.id)}
                  className="ml-auto hover:opacity-75 transition"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
        </div>
      )}
      {isEditting && (
        <div>
          <FileUpload
            endpoint="courseAttachment"
            onChange={(url) => {
              onSubmit({ url: url! });
              console.log(`Uploading image: ${url}`);
            }}
          />
          <div className="text-xs text-muted-foreground mt-4 ">
            Any documents that your student can find helpful
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseAttachmentForm;
