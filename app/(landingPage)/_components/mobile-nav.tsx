import React from "react";

type Props = {};
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
const MobileNav = (props: Props) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="h-8 w-8 hover:opacity-75" />
      </SheetTrigger>
      <SheetContent className="flex flex-col space-y-4">
        <SheetHeader>
          {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
          {/* <SheetDescription>
        This action cannot be undone. This will permanently delete your
        account and remove your data from our servers.
      </SheetDescription> */}
        </SheetHeader>
        <Link
          href={"#"}
          className="text-md text-primary hover:underline transition capitalize font-medium hover:opacity-75"
        >
          About
        </Link>
        <Link
          href={"#"}
          className="text-md text-primary hover:underline transition capitalize font-medium hover:opacity-75"
        >
          help
        </Link>
        <SignInButton>
          <Button>Login</Button>
        </SignInButton>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
