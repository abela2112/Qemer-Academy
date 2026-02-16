import React from "react";
import { Reveal } from "@/components/Reveal";

type Props = {};

const Oursuccess = (props: Props) => {
  return (
    <section className="bg-[#f6f8ff] md:px-20 px-6 py-16">
      <div className="flex flex-col items-center md:w-[80%] mx-auto">
        <Reveal>
          <h2 className="text-3xl font-bold text-center my-2">Our Success</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-sm w-full md:w-[500px] mx-auto text-center text-[#7c7c94] mt-2 mb-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure sed
            quaerat nam, quos omnis odio optio labore aut autem quae magni
            dignissimos facilis tempora quo ut officia adipisci molestias officiis
          </p>
        </Reveal>
        
        <div className="flex mt-10 flex-col md:flex-row gap-y-8 md:gap-x-12 w-full justify-around flex-wrap">
          <Reveal delay={0.2} className="flex-1">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text">
                15K+
              </span>
              <span className="font-semibold capitalize mt-2">Students</span>
            </div>
          </Reveal>
          
          <Reveal delay={0.3} className="flex-1">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text">
                75%
              </span>
              <span className="font-semibold capitalize mt-2">Success Rate</span>
            </div>
          </Reveal>
          
          <Reveal delay={0.4} className="flex-1">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text">
                35
              </span>
              <span className="font-semibold capitalize mt-2">Questions Answered</span>
            </div>
          </Reveal>
          
          <Reveal delay={0.5} className="flex-1">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text">
                26
              </span>
              <span className="font-semibold capitalize mt-2">Expert Tutors</span>
            </div>
          </Reveal>
          
          <Reveal delay={0.6} className="flex-1">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text">
                16
              </span>
              <span className="font-semibold capitalize mt-2">
                Years Experience
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Oursuccess;
