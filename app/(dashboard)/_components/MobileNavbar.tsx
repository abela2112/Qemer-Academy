import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SideBar from "./Sidebar";
import { Menu } from "lucide-react";

const MobileNavbar = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger className="md:hidden pr-6 transition hover:opacity-75">
          <Menu />
        </SheetTrigger>
        <SheetContent className="p-0 bg-white" side={"left"}>
          <SideBar />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
