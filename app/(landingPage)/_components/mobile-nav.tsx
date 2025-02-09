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
import { navLinks } from "@/data/link";
import Navlink from "./navlink";
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
        {navLinks.map((navlink, i) => (
          <Navlink key={i} href={navlink.href} label={navlink.label} />
        ))}

        <SignInButton>
          <Button className="bg-[#0077c0]">Login</Button>
        </SignInButton>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
