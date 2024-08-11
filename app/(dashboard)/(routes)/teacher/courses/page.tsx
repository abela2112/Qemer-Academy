import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

const TeachersPage = async () => {
  const { userId } = auth();
  if (!userId) redirect("/");
  const courses = await db.course.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    // <div className="p-6">
    //   <Link href={"/teacher/create"}>
    //     <Button variant={"default"}>Create</Button>
    //   </Link>
    // </div>
    <div className="container p-6">
      <DataTable columns={columns} data={courses} />
    </div>
  );
};

export default TeachersPage;
