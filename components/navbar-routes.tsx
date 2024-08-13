"use client";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import SearchInput from "./SearchInput";

const NavbarRoutes = () => {
  const pathname = usePathname();
  const isTeacherPage = pathname.startsWith("/teacher");
  const isPlayerPage = pathname.includes("/chapter");
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
          {isTeacherPage ? (
            <Link href="/">
              <Button size="sm" variant="ghost">
                <LogOut className="w-4 h-4 mr-2" />
                Exit
              </Button>
            </Link>
          ) : (
            <Link href="/teacher/courses">
              <Button size="sm" variant={"ghost"}>
                Teacher Mode
              </Button>
            </Link>
          )}
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </>
  );
};

export default NavbarRoutes;
