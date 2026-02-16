import Image from "next/image";
import React from "react";
import Google from "@/public/google.png";
import Fiver from "@/public/fiver.png";
import Ibm from "@/public/ibm.png";
import airbnb from "@/public/Airbnb_logo.png";
import upwork from "@/public/UpworkLogo_UpGreen_Trademark.jpg";
import { Reveal } from "@/components/Reveal";

type Props = {};

const LogoTracker = (props: Props) => {
  return (
    <section className="py-8 md:py-12 bg-white border-y border-gray-100">
      <div className="container px-4 md:px-6 mb-8">
        <Reveal width="100%">
          <p className="text-center text-lg text-slate-600 font-medium">
            Trusted by the world&apos;s most innovative teams
          </p>
        </Reveal>
      </div>

      <div className="flex overflow-hidden relative w-full">
        {/* Gradients for fading effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex gap-14 whitespace-nowrap animate-ticker hover:[animation-play-state:paused]">
          {/* First set of logos */}
          <div className="flex gap-14 items-center flex-shrink-0">
            <Image src={Google} alt="google" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
            <Image src={Fiver} alt="fiver" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
            <Image src={Ibm} alt="ibm" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
            <Image src={airbnb} alt="airbnb" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
            <Image src={upwork} alt="upwork" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
          </div>
          
          {/* Second set of logos for seamless loop */}
          <div className="flex gap-14 items-center flex-shrink-0">
            <Image src={Google} alt="google" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
            <Image src={Fiver} alt="fiver" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
            <Image src={Ibm} alt="ibm" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
            <Image src={airbnb} alt="airbnb" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
            <Image src={upwork} alt="upwork" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
          </div>

           {/* Third set to ensure no gaps on wide screens */}
           <div className="flex gap-14 items-center flex-shrink-0">
            <Image src={Google} alt="google" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
            <Image src={Fiver} alt="fiver" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
            <Image src={Ibm} alt="ibm" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
            <Image src={airbnb} alt="airbnb" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
            <Image src={upwork} alt="upwork" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
          </div>

          {/* forth set to ensure no gaps on wide screens */}
           <div className="flex gap-14 items-center flex-shrink-0">
            <Image src={Google} alt="google" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
            <Image src={Fiver} alt="fiver" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
            <Image src={Ibm} alt="ibm" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
            <Image src={airbnb} alt="airbnb" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
            <Image src={upwork} alt="upwork" className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTracker;
