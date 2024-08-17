"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const formSchema = z.object({
  title: z.string().min(3, { message: "Title is too short" }),
});

const CourseCreatePage = () => {
  const router = useRouter();
  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/course/create", value);
      router.push(`/teacher/courses/${response.data?.id}`);
      toast.success("Course created successfully");
    } catch (error) {
      toast.error("Failed to create course");
      console.error(error);
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;
  return (
    <div className="mx-auto max-w-5xl flex items-center justify-center p-6 h-full">
      <div>
        <h1 className="text-2xl">Name your course</h1>
        <p className="text-sm text-slate-600">
          What would you like to name your course ,Don&apos;t worry you can
          change any time
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Title</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="eg. 'Advanced web development' "
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    what will you teach in this course?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-x-2 items-center">
              <Link href="/teacher/courses">
                <Button type="button" variant={"ghost"}>
                  Cancel
                </Button>
              </Link>
              <Button type="submit" disabled={isSubmitting || !isValid}>
                Coutinue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CourseCreatePage;
