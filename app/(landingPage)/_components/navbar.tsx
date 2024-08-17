import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SignInButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";
import MobileNav from "./mobile-nav";

type Props = {};
const Navbar = (props: Props) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm">
      <div className="flex items-center justify-between px-5 md:px-20 h-16">
        <div className="flex  items-center gap-x-4">
          <h1 className="text-2xl font-bold"> Qemer</h1>
          <div className="relative hidden md:block">
            <Search className="w-4 h-4 absolute top-3 left-3 text-slate-600" />
            <Input
              // value={value}
              // onChange={(e) => setValue(e.target.value)}
              className="w-full md:w-[250px] pl-9 rounded-md bg-slate-100 focus-visible:ring-slate-200"
              placeholder="Search for courses"
            />
          </div>
        </div>
        <nav className="hidden  md:flex text-black/60 items-center gap-x-10 justify-around">
          <Link
            href={"#"}
            className="text-md hover:underline hover:text-primary transition capitalize font-medium hover:opacity-75"
          >
            Courses
          </Link>
          <Link
            href={"#"}
            className="text-md hover:underline hover:text-primary transition capitalize font-medium hover:opacity-75"
          >
            About
          </Link>
          <Link
            href={"#"}
            className="text-md hover:underline hover:text-primary transition capitalize font-medium hover:opacity-75"
          >
            help
          </Link>
          <SignInButton>
            <Button>Login</Button>
          </SignInButton>
        </nav>
        <div className="md:hidden block">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
