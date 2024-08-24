"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  href: string;
  label: string;
};

const Navlink = ({ href, label }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        "text-md hover:underline hover:text-[#0077c0] transition capitalize font-medium hover:opacity-75",
        isActive && "text-[#0077c0] underline underline-offset-4"
      )}
    >
      {label}
    </Link>
  );
};

export default Navlink;
