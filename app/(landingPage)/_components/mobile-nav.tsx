"use client";
import React, { useState } from "react";

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
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Menu className="h-8 w-8 hover:opacity-75" />
      </SheetTrigger>
      <SheetContent className="flex flex-col space-y-4">
        
        {navLinks.map((navlink, i) => (
          <Navlink 
            key={i} 
            href={navlink.href} 
            label={navlink.label} 
            onClick={() => setOpen(false)}
          />
        ))}

        <SignInButton>
          <Button className="bg-[#0077c0]">Login</Button>
        </SignInButton>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
