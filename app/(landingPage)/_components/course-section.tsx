"use client";
import { getTopCourses } from "@/app/actions/get-landingpage-course";
import { getCourses } from "@/app/actions/getCourses";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/db";
import imageCard1 from "@/public/ImageCard-1.png";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import CategoryItem from "./categoryItem";
import Avatar from "@/public/Avatar (1).png";
import { Category, Course } from "@prisma/client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
type CourseWithCategory = { category: Category | null } & Course;

type Props = {
  courses: CourseWithCategory[];
  categories: Category[];
};

const TopCourses = ({ courses, categories }: Props) => {
  const [selected, setSelected] = useState("IT and Software");
  const [data, setData] = useState<CourseWithCategory[]>([]);
  useEffect(() => {
    setData([
      ...courses.filter((course) => course.category?.name === selected),
    ]);

    // return () => {};
  }, [selected]);

  return (
    <section className="md:px-20 p-6 flex flex-col py-8 md:py-10 bg-[#c7eeff] w-full space-y-2">
      <span className="text-[#00a7ff]">Explore Programs</span>
      <h2 className="text-3xl font-semibold">Our Most Popular Class</h2>
      <p className="text-sm text-muted-foreground">
        Let's join our famous class, the knowledge provided will definitely be
        useful for you.
      </p>

      {/* <div className="space-y-4">
        <div className="flex items-center gap-x-2 overflow-x-auto border border-transparent border-b-gray-200">
          {categories.map((category) => (
            <CategoryItem
              category={category}
              selected={selected}
              setSelected={setSelected}
              key={category.id}
            />
          ))}
        </div>
      </div>
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
      </div> */}

      <div className="flex flex-col md:flex-row gap-x-4 mx-auto mt-5">
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, i) => (
              <CarouselItem key={i} className="md:basis-1/3 w-[300px]">
                <Card className="w-full mt-4 shadow-md">
                  <CardHeader>
                    <Image
                      alt="card image"
                      src={imageCard1}
                      className="object-cover w-full"
                    />
                  </CardHeader>
                  <CardContent>
                    <span className="text-[#0077c0] font-semibold">Design</span>
                    <div className="flex items-center justify-between py-2">
                      <h3 className="text-lg font-bold truncate">
                        Figma UI UX Design
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Use Figma to get a job in UI Design, User Interface, User
                      Experience design.
                    </p>

                    <div className="flex gap-x-2 items-center py-3">
                      <span className="text-[#0077c0]">4.3</span>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star className="h-4 w-4 text-[#fe942f]" />
                      ))}
                      (16,356)
                    </div>
                    <div className="flex items-center justify-between gap-x-4">
                      <div className="flex items-center gap-x-2">
                        <Image
                          src={Avatar}
                          height={50}
                          alt="avatar"
                          width={50}
                          className="rounded-full object-cover"
                        />
                        <div className="text-xs">
                          <p>Jane cooper</p>
                          <p>2001 enrolled</p>
                        </div>
                      </div>
                      <span className="text-[#0077c0] font-bold text-xl">
                        $17.84
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <Button variant={"outline"} className="max-w-lg mx-auto">
        Explore More
      </Button>
    </section>
  );
};

export default TopCourses;
