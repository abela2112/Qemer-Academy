import { Button } from "@/components/ui/button";
import Image from "next/image";
import hero from "../../../public/hero.png";
import placeholder from "@/public/placeholder.png";
import { User2, Video } from "lucide-react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="w-full px-10 pt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
        <div className="flex flex-col gap-y-5 md:p-10 bg-cover bg-center md:bg-hero">
          {/* <h2 className="uppercase text-xl md:text-2xl font-bold text-primary-foreground">
            Qemer Learning App
          </h2> */}
          <h1 className="md:text-5xl lg:text-6xl  text-3xl capitalize font-sans font-bold leading-normal">
            Unlock Your <span className="text-[#0077c0]">Potential</span> with
            Qemer <span className="text-[#0077c0]">Learn</span> Anytime,
            Anywhere
          </h1>
          <p className="text-[#010D3E] text-lg">
            Discover courses, track your progress, and achieve your goals with
            our interactive learning platform.
          </p>
          <Button className="bg-[#0077c0] w-[250px]">Get Started</Button>
        </div>
        <div className="hidden lg:flex lg:items-end lg:justify-end justify-center items-center mt-2">
          <div className="relative flex items-center justify-center rounded-full bg-[#0077c0] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">
            <Image
              src={hero}
              alt="hero"
              className="object-cover rounded-full"
              height={400}
              width={400}
            />
            <Image
              src={placeholder}
              alt="placeholder"
              className="absolute -left-2 -right-4 -top-2 bottom-0 object-cover -ml-5"
            />
            <div className="h-12 w-12 rounded-full bg-[#0077c0] absolute bottom-1 left-2 z-20"></div>
            <div className="rounded-md border border-[#0077c0] absolute top-8 -left-2 flex items-center gap-x-2 bg-white p-2 z-20">
              <div className="bg-[#0077c0] p-2 rounded-md flex items-center justify-center z-20">
                <Video className="text-muted" />
              </div>
              <div className="hidden md:flex flex-col">
                <span className="font-bold">2K+</span>
                <span className="text-sm text-muted-foreground">
                  Videos Courses
                </span>
              </div>
            </div>
            <div className="rounded-md border border-[#0077c0] absolute bottom-1 -right-2 flex items-center gap-x-2 bg-white p-2">
              <div className="bg-[#0077c0] p-2 rounded-md flex items-center justify-center">
                <User2 className="text-muted" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold">20+</span>
                <span className="text-sm text-muted-foreground">Tutors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
