import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

type Props = {};

const CallToAction = (props: Props) => {
  return (
    <section className="p-8 bg-[#0077c0] md:w-[80%] mx-auto my-4 rounded-md grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
      <div className="flex items-center justify-center">
        <Image
          src={
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={400}
          height={400}
          alt="about image"
          className="object-cover rounded-md"
        />
      </div>

      <div className="md:p-10 space-y-4">
        <p className="text-3xl text-white font-bold">
          Become part of a global community of learners and educators
        </p>
        <Button variant={"outline"} className="rounded-md max-w-xs">
          Start Learning Today
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
