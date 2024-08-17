import Image from "next/image";
import React from "react";
import Google from "@/public/google.png";
import Fiver from "@/public/fiver.png";
import Ibm from "@/public/ibm.png";
// import  from '@/public/google.png'
// import Google from '@/public/google.png'
type Props = {};

const LogoTracker = (props: Props) => {
  return (
    <div className="container px-20 py-8 md:py-12 bg-white">
      <p className="text-center text-lg py-2 italic">
        Trusted by the world's top brands
      </p>
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent))]">
        <div className="flex gap-14 flex-none">
          <Image src={Google} alt="google" className="h-8 w-auto" />
          <Image src={Fiver} alt="fiver" className="h-8 w-auto" />
          <Image src={Ibm} alt="ibm" className="h-8 w-auto" />
          <Image src={Fiver} alt="fiver" className="h-8 w-auto" />
          <Image src={Ibm} alt="ibm" className="h-8 w-auto" />
          <Image src={Fiver} alt="fiver" className="h-8 w-auto" />
          <Image src={Ibm} alt="ibm" className="h-8 w-auto" />
          <Image src={Fiver} alt="fiver" className="h-8 w-auto" />
          <Image src={Ibm} alt="ibm" className="h-8 w-auto" />
          <Image src={Fiver} alt="fiver" className="h-8 w-auto" />
          <Image src={Ibm} alt="ibm" className="h-8 w-auto" />
          <Image src={Ibm} alt="ibm" className="h-8 w-auto" />
          <Image src={Fiver} alt="fiver" className="h-8 w-auto" />
          <Image src={Ibm} alt="ibm" className="h-8 w-auto" />
          <Image src={Fiver} alt="fiver" className="h-8 w-auto" />
          <Image src={Ibm} alt="ibm" className="h-8 w-auto" />
          <Image src={Ibm} alt="ibm" className="h-8 w-auto" />
          <Image src={Fiver} alt="fiver" className="h-8 w-auto" />
          <Image src={Ibm} alt="ibm" className="h-8 w-auto" />
          <Image src={Fiver} alt="fiver" className="h-8 w-auto" />
          <Image src={Ibm} alt="ibm" className="h-8 w-auto" />
        </div>
      </div>
    </div>
  );
};

export default LogoTracker;
