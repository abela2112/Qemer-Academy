import { getDashboardCourse } from "@/app/actions/get-dashboard-course";
import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import CourseList from "../search/_components/CourseList";

import { CheckCircle, Clock, LayoutDashboard } from "lucide-react";
import InfoCard from "./_components/InfoCard";
import { DashboardBanner } from "./_components/DashboardBanner";
import { DashboardChart } from "./_components/DashboardChart";
import { CalendarWidget } from "./_components/CalendarWidget";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Track your progress and manage your courses on Qemer Academy.",
};

export default async function Dashboard() {
  const { userId } = auth();
  
  if (!userId) redirect("/");

  const { completedCourses, inProgressCourses } = await getDashboardCourse(
    userId
  );
  
  const allCourses = [...inProgressCourses, ...completedCourses];

  return (
    <div className="p-6 space-y-6 bg-slate-50 min-h-full">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Content Area */}
        <div className="md:col-span-2 space-y-6">
            <DashboardBanner />
            
            <div>
                 <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-slate-800">My Courses</h2>
                    <a href="/search" className="text-sm text-slate-500 hover:text-slate-700 underline">View All</a>
                 </div>
                 
                 {/* Scrollable container for My Courses */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {allCourses.slice(0, 4).map((course) => (
                        <div key={course.id} className="transform transition-all hover:scale-[1.02]">
                           {/* Reusing existing list item style but could be specialized */}
                           {/* For now, just rendering a few items from the main list component logic manually or reusing a subset */}
                             {/* Note: Ideally we create a specific card, but CourseCardItem is fine if we wrap it properly */}
                        </div>
                    ))}
                    {allCourses.length === 0 && (
                        <div className="col-span-full py-12 text-center text-muted-foreground border-2 border-dashed rounded-lg">
                            No courses in progress. Start learning today!
                        </div>
                    )}
                 </div>
                 <CourseList items={allCourses} />
            </div>
            
            <div className="mt-8">
                 <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-slate-800">Popular Courses</h2>
                    <a href="/search" className="text-sm text-slate-500 hover:text-slate-700 underline">View All</a>
                 </div>
                 {/* This would be fetched from a popular courses action, for now reuse in progress as demo or leave empty */}
                 {/* I'll leave the popular section for future implementation or reuse existing list */}
            </div>
        </div>
        
        {/* Right Sidebar Area */}
        <div className="space-y-6">
            <CalendarWidget />
            
            <DashboardChart />
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
                 <h3 className="font-bold mb-4">Public Channels</h3>
                 <div className="space-y-4">
                     <div className="flex items-center gap-3">
                         <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">C</div>
                         <div>
                             <p className="text-sm font-semibold">Community</p>
                             <p className="text-xs text-muted-foreground">161K Members</p>
                         </div>
                     </div>
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 font-bold">D</div>
                         <div>
                             <p className="text-sm font-semibold">Design</p>
                             <p className="text-xs text-muted-foreground">10K Members</p>
                         </div>
                     </div>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
}
