"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Category, Course } from "@prisma/client";
import Image from "next/image";
import { useEffect, useState } from "react";
type CourseWithCategory = { category: Category | null } & Course;

type Props = {
  courses: CourseWithCategory[];
  categories: Category[];
};

import { Reveal } from "@/components/Reveal";

const Mentors = ({ courses, categories }: Props) => {
  const [selected, setSelected] = useState("IT and Software");
  const [data, setData] = useState<CourseWithCategory[]>([]);
  useEffect(() => {
    setData([
      ...courses.filter((course) => course.category?.name === selected),
    ]);

    // return () => {};
  }, [selected, courses]);

  return (
    <section className="md:px-20 p-6 items-center flex flex-col py-8 md:py-10 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] w-full">
      <Reveal>
        <h2 className="text-3xl font-semibold text-center mb-6">Meet our mentors</h2>
      </Reveal>

      {/* Categories Buttons (Placeholder if you want to add them back later, or just keep filtering logic) */}
      
      <div className="flex gap-x-3 gap-y-6 flex-wrap pt-2 justify-center w-full">
        {data.map((course, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <Card className="sm:w-[250px] h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <Image
                  alt="card image"
                  src={course.image!}
                  className="object-cover w-full h-40 rounded-t-lg"
                  width={200}
                  height={120}
                />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-bold line-clamp-1" title={course.title}>{course.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-2">{course.description}</p>

                <div className="flex gap-x-2 mt-4 text-sm text-blue-600 font-medium">View Course</div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Mentors;
