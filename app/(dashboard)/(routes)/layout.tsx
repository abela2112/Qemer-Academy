import { ReactNode } from "react";
import SideBar from "../_components/Sidebar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full flex-col fixed inset-y-0 w-56 z-50">
        <SideBar />
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
