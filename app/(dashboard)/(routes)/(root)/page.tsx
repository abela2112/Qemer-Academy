import { getDashboardCourse } from "@/app/actions/get-dashboard-course";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import CourseList from "../search/_components/CourseList";
import InfoCard from "./_components/InfoCard";
import { CheckCircle, Clock } from "lucide-react";
export default async function Dashboard() {
  const { userId } = auth();
  if (!userId) redirect("/");

  const { completedCourses, inProgressCourses } = await getDashboardCourse(
    userId
  );

  return (
    <div className="p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InfoCard
          variant="default"
          label="In Progress"
          icon={Clock}
          noOfItems={inProgressCourses.length}
        />
        <InfoCard
          variant="success"
          label="Completed"
          icon={CheckCircle}
          noOfItems={completedCourses.length}
        />
      </div>
      <CourseList items={[...inProgressCourses, ...completedCourses]} />
    </div>
  );
}
