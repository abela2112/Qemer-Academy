import { db } from "@/lib/db";
import Categories from "./_components/Categories";
import SearchInput from "@/components/SearchInput";
import { auth } from "@clerk/nextjs/server";
import { getCourses } from "@/app/actions/getCourses";
import { redirect } from "next/navigation";
import CourseList from "./_components/CourseList";
type SearchPageProps = {
  searchParams: {
    title: string;
    categoryId: string;
  };
};
const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { userId } = auth();
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });
  if (!userId) redirect("/");
  const courses = await getCourses({ userId, ...searchParams });
  return (
    <>
      <div className="px-6 pt-6 md:hidden block mb-0">
        <SearchInput />
      </div>
      <div className="p-6">
        <Categories items={categories} />
        <CourseList items={courses} />
      </div>
    </>
  );
};

export default SearchPage;
