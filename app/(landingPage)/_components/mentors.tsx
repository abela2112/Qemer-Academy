"use client";
import { getTopCourses } from "@/app/actions/get-landingpage-course";
import { getCourses } from "@/app/actions/getCourses";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/db";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import CategoryItem from "./categoryItem";
import { Category, Course } from "@prisma/client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
type CourseWithCategory = { category: Category | null } & Course;

type Props = {
  courses: CourseWithCategory[];
  categories: Category[];
};

const Mentors = ({ courses, categories }: Props) => {
  const [selected, setSelected] = useState("IT and Software");
  const [data, setData] = useState<CourseWithCategory[]>([]);
  useEffect(() => {
    setData([
      ...courses.filter((course) => course.category?.name === selected),
    ]);

    // return () => {};
  }, [selected]);

  return (
    <section className="md:px-20 p-6 items-center flex flex-col py-8 md:py-10 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] w-full">
      <h2 className="text-3xl font-semibold text-center">Meet our mentors</h2>

      <div className="flex gap-x-3 flex-wrap pt-2">
        {data.map((course) => (
          <Card className="sm:w-[250px] mt-4">
            <CardHeader>
              <Image
                alt="card image"
                src={course.image!}
                className="object-cover w-full h-40"
                width={200}
                height={120}
              />
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-bold">{course.title}</h3>
              <p className="text-sm">{course.description}</p>

              <div className="flex gap-x-2">review</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Mentors;