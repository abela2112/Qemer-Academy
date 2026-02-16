import Link from "next/link";
import SidebarRoutes from "./SidebarRoutes";
import Logo from "./logo";
import { HelpCircle } from "lucide-react";

const SideBar = () => {
  return (
    <div className="h-full border-r flex flex-col bg-[#111827] text-white shadow-xl overflow-y-auto">
      <div className="px-3flex items-center  gap-2 mb-4">
         <Link href="/">
            <Logo />
         </Link>
      </div>

      <div className="px-6 mb-2">
         <p className="text-xs uppercase text-gray-500 font-semibold tracking-wider">Main</p>
      </div>

      <div className="flex flex-col w-full px-3">
        <SidebarRoutes />
      </div>

      <div className="mt-auto p-6">
        <div className="flex items-center gap-x-2 text-gray-400 hover:text-white transition-colors cursor-pointer text-sm font-medium">
             <HelpCircle className="w-5 h-5" />
             Support
        </div>
      </div>
    </div>
  );
};

export default SideBar;
