import { BarChart, FileText, MonitorPlay, UserCheck } from "lucide-react";
import instructor from "@/public/instructor.png";
import student from "@/public/student.png";
import Image from "next/image";
import React from "react";
import { Reveal } from "@/components/Reveal";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div className="px-6 py-12 md:px-20 flex flex-col items-center bg-[#0077c0]">
      <Reveal width="100%" className="w-full flex flex-col items-center">
        <h2 className="text-sm font-bold text-center my-2 text-primary-foreground uppercase tracking-widest">
          Features
        </h2>
        <p className="text-3xl md:text-4xl mx-auto text-center text-white font-bold mb-12">
          The benefit of using our platform
        </p>
      </Reveal>
      
      <div className="flex flex-col md:flex-row gap-8 w-full justify-between items-start flex-wrap">
        <Reveal delay={0.2} className="flex-1 min-w-[250px]">
          <div className="relative flex flex-col w-full h-full rounded-xl bg-white/5 hover:bg-white/10 transition-colors px-6 py-8 border border-white/10 backdrop-blur-sm">
            <div className="bg-[#c7eeff] text-[#0077c0] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20">
              <FileText className="w-7 h-7" />
            </div>
            <span className="text-xl font-bold text-white mb-3 block">
              Personalized Learning Paths
            </span>
            <span className="text-sm text-blue-100 leading-relaxed block">
              Tailor your learning experience with courses designed to match your
              skill level and interests.
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.4} className="flex-1 min-w-[250px]">
          <div className="relative flex flex-col w-full h-full rounded-xl bg-white/5 hover:bg-white/10 transition-colors px-6 py-8 border border-white/10 backdrop-blur-sm">
            <div className="bg-[#c7eeff] text-[#0077c0] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20">
              <MonitorPlay className="w-7 h-7" />
            </div>
            <span className="text-xl font-bold text-white mb-3 block">
              Interactive Courses
            </span>
            <span className="text-sm text-blue-100 leading-relaxed block">
              Engage with interactive content, quizzes, and hands-on projects to
              reinforce your knowledge.
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.6} className="flex-1 min-w-[250px]">
          <div className="relative flex flex-col w-full h-full rounded-xl bg-white/5 hover:bg-white/10 transition-colors px-6 py-8 border border-white/10 backdrop-blur-sm">
            <div className="bg-[#c7eeff] text-[#0077c0] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20">
              <UserCheck className="w-7 h-7" />
            </div>
            <span className="text-xl font-bold text-white mb-3 block">
              Expert Instructors
            </span>
            <span className="text-sm text-blue-100 leading-relaxed block">
              Learn from industry experts and top educators who bring real-world
              experience to the classroom.
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.8} className="flex-1 min-w-[250px]">
          <div className="relative flex flex-col w-full h-full rounded-xl bg-white/5 hover:bg-white/10 transition-colors px-6 py-8 border border-white/10 backdrop-blur-sm">
            <div className="bg-[#c7eeff] text-[#0077c0] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20">
              <BarChart className="w-7 h-7" />
            </div>
            <span className="text-xl font-bold text-white mb-3 block">
              Progress Tracking
            </span>
            <span className="text-sm text-blue-100 leading-relaxed block">
              Monitor your achievements and stay motivated with our comprehensive
              progress tracking tools.
            </span>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default AboutUs;
