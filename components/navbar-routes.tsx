"use client";
import {
  SignedIn,
  SignedOut,
  SignIn,
  useAuth,
  UserButton,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import SearchInput from "./SearchInput";
import { isTeacher } from "@/lib/teacher";

const NavbarRoutes = () => {
  const { userId } = useAuth();

  const pathname = usePathname();

  const isTeacherPage = pathname.startsWith("/teacher");
  const isCoursePage = pathname.includes("/courses");
  const isSearchPage = pathname.includes("/search");
  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      <div className="flex gap-x-2 ml-auto">
        <SignedIn>
          {isTeacherPage || isCoursePage ? (
            <Link href="/dashboard">
              <Button size="sm" variant="ghost">
                <LogOut className="w-4 h-4 mr-2" />
                Exit
              </Button>
            </Link>
          ) : isTeacher(userId) ? (
            <Link href="/teacher/courses">
              <Button size="sm" variant={"ghost"}>
                Teacher Mode
              </Button>
            </Link>
          ) : null}
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </>
  );
};

export default NavbarRoutes;
