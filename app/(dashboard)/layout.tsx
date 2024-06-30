import { ReactNode } from "react";
import SideBar from "./_components/Sidebar";
import Navbar from "./_components/navbar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full">
      <div className="fixed md:pl-56 h-[80px] inset-y-0 z-50 w-full">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full flex-col fixed inset-y-0 w-56 z-50">
        <SideBar />
      </div>
      <main className="md:pl-56 h-full pt-[80px]">{children}</main>
    </div>
  );
};

export default DashboardLayout;
