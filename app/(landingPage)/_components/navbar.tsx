"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import { navLinks } from "@/data/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Category } from "@prisma/client";
import MobileNav from "./mobile-nav";
import Navlink from "./navlink";
import { useRouter } from "next/navigation";

type Props = {
  categories: Category[];
};

const Navbar = ({ categories }: Props) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/dashboard");
  };
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm px-5">
      <div className="flex items-center justify-between h-16 gap-x-2">
        <div className="flex  items-center gap-x-4">
          <p className="text-2xl font-bold"> Qemer</p>
          <div className="relative hidden md:flex items-center  gap-x-2">
            <Search className="w-4 h-4 absolute top-3 left-3 text-slate-600" />
            <Input
              // value={value}
              // onChange={(e) => setValue(e.target.value)}
              className="w-full lg:w-[250px] pl-9 rounded-md bg-slate-100 focus-visible:ring-slate-200"
              placeholder="Want to learn ?"
            />
            <div className="hidden lg:block ">
              <Select>
                <SelectTrigger className="w-[180px] bg-slate-100 focus-within:ring-slate-200 focus-visible:ring-slate-200 focus:outline-[#0077c0] text-[#0077c0]">
                  <SelectValue placeholder="Explore" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <nav className="hidden  md:flex text-black/60 items-center gap-x-5 justify-around">
          {navLinks.map((navlink, i) => (
            <Navlink key={i} href={navlink.href} label={navlink.label} />
          ))}
          <SignedOut>
            <SignInButton>
              <Button className="bg-[#0077c0]">Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <Button className="bg-[#0077c0]" onClick={onClick}>
              Dashboard
            </Button>
          </SignedIn>
        </nav>
        <div className="md:hidden block">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
