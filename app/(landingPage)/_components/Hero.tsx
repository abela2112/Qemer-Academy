import React from "react";
import Navbar from "./navbar";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import hero from "../../../public/hero.png";
import { Search } from "lucide-react";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="w-full md:px-20 py-8 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 rounded-xl">
        <div className="flex flex-col space-y-5 p-6 md:p-10 flex-1">
          <h2 className="uppercase text-xl md:text-2xl font-bold text-primary-foreground">
            Qemer Learning App
          </h2>
          <h1 className="md:text-5xl lg:text-7xl bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text text-4xl capitalize font-bold leading-tight">
            Knowledge meets Innovation
          </h1>
          <p className="text-[#010D3E] text-lg">
            This platform's simplicity belies its powerful capabilities,
            offering a seamless and enjoyable educational experience.
          </p>
          <div className="relative flex items-center w-full md:w-[80%]">
            <Input
              placeholder="Search for courses"
              className="pl-10 rounded-md"
            />
            <Search className="absolute left-3 w-4 h-4" />
            <div className="hidden md:block">
              {/* <Select>
                <SelectTrigger className="w-[180px] rounded-none rounded-tr-sm rounded-br-sm">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select> */}
            </div>
          </div>
        </div>
        <div className="flex md:items-center md:flex-1">
          <Image src={hero} alt="hero" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
