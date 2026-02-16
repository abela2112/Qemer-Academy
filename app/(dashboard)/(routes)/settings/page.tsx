import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SettingsClient } from "./_components/SettingsClient";
import { isTeacher } from "@/lib/teacher";

const SettingsPage = () => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  // Determine role based on utility
  // Since we only have isTeacher for now, we'll use that.
  // In a real app, this would check DB or Clerk metadata.
  const role = isTeacher(userId) ? "instructor" : "student"; 

  return (
    <div className="h-full">
      <SettingsClient initialRole={role} />
    </div>
  );
};

export default SettingsPage;
