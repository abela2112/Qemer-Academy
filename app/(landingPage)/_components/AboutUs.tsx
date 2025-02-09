import { Calendar, File } from "lucide-react";
import instructor from "@/public/instructor.png";
import student from "@/public/student.png";
import Image from "next/image";
import React from "react";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div className="px-6 py-8 md:px-20 flex flex-col items-center bg-[#0077c0]">
      <h2 className="text-sm font-bold text-center my-2 text-primary-foreground uppercase">
        Features
      </h2>
      <p className="text-2xl mx-auto  text-center text-primary-foreground font-semibold">
        The benefit of using our platform
      </p>
      <div className="flex mt-10 flex-col md:flex-row gap-y-8 md:gap-x-4 w-full justify-around">
        <div className="relative flex flex-col  w-full md:w-[300px] rounded-md px-5 py-8">
          <div className="bg-[#c7eeff] w-14 h-14 rounded-full flex items-center justify-center">
            <File className="" />
          </div>
          <span className="text-lg font-semibold mt-10 text-muted">
            Personalized Learning Paths
          </span>
          <span className="text-sm mt-2 text-muted/60 ">
            Tailor your learning experience with courses designed to match your
            skill level and interests.
          </span>
        </div>
        <div className="relative flex flex-col w-full md:w-[300px] rounded-md px-5 py-8">
          <div className="bg-[#c7eeff] w-14 h-14 rounded-full flex items-center justify-center">
            <Calendar className="" />
          </div>
          <span className="text-lg font-semibold mt-10 text-muted">
            Interactive Courses
          </span>
          <span className="text-sm mt-2 text-muted/60">
            Engage with interactive content, quizzes, and hands-on projects to
            reinforce your knowledge.
          </span>
        </div>
        <div className="relative flex flex-col w-full md:w-[300px] rounded-md px-5 py-8">
          <div className="bg-[#c7eeff] w-14 h-14 rounded-full flex items-center justify-center">
            <Calendar className="" />
          </div>
          <span className="text-lg font-semibold mt-10 text-muted">
            Expert Instructors
          </span>
          <span className="text-sm mt-2 text-muted/60">
            Learn from industry experts and top educators who bring real-world
            experience to the classroom.
          </span>
        </div>
        <div className="relative flex flex-col w-full md:w-[300px] rounded-md px-5 py-8">
          <div className="bg-[#c7eeff] w-14 h-14 rounded-full flex items-center justify-center">
            <Calendar className="" />
          </div>
          <span className="text-xl font-semibold mt-10 text-muted">
            Progress Tracking
          </span>
          <span className="text-sm mt-2 text-muted/60">
            Monitor your achievements and stay motivated with our comprehensive
            progress tracking tools.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
