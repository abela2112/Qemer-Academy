import { getTopCourses } from "@/app/actions/get-landingpage-course";
import CourseCardItem from "@/app/(dashboard)/(routes)/search/_components/CourseCardItem";
import SearchInput from "@/components/SearchInput";
import { Reveal } from "@/components/Reveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Courses",
  description: "Browse our extensive catalog of courses in programming, design, business, and more.",
};

interface SearchParams {
  title: string;
}

const CoursesPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const courses = await getTopCourses(undefined, searchParams.title);

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal width="100%">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-[#0077c0] mb-4">
              Explore Our Courses
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover a wide range of courses designed to help you master new skills
              and advance your career.
            </p>
          </div>
        </Reveal>

        <Reveal width="100%" delay={0.2}>
          <div className="flex justify-center mb-10 w-full">
              <SearchInput
                className="w-full md:w-[500px] pl-9 rounded-md bg-white shadow-sm focus-visible:ring-slate-200"
              />
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Reveal key={course.id} delay={index * 0.05} className="h-full">
              <CourseCardItem
                id={course.id}
                title={course.title}
                imageUrl={course.image!}
                chapterLength={course.Chapters.length}
                price={course.price!}
                progress={null}
                category={course.category?.name!}
              />
            </Reveal>
          ))}
        </div>
        
        {courses.length === 0 && (
          <Reveal delay={0.4}>
            <div className="text-center text-muted-foreground mt-10">
              No courses found matching your search.
            </div>
          </Reveal>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
