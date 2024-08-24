import { Button } from "@/components/ui/button";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <section className="p-6 md:px-20 pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4 p-10">
          <h1 className="text-4xl text-[#0079c0] font-bold capitalize">
            About Us
          </h1>
          <span className="font-semibold text-2xl capitalize leading-normal">
            <span className="text-[#0079c0] uppercase">Qemer ACADEMy</span>{" "}
            providing the best opportunities to the students around the glob.
          </span>
          <p className="text-sm text-muted-foreground">
            Weekend UX, is a UI/UX Design Academy in Delhi involved in User
            Experience and User Interface Training and Consulting. It was
            started in 2023 and passionate towards User Interface Design/ User
            Experience Design, Human Computer Interaction Design. Humanoid is
            gushing towards competence to acquire knowledge and have a wide
            understanding towards the sphere through the foremost courses in the
            area of UI/UX Design, by strengthening up your skills, for your
            golden future
          </p>

          <Button className="bg-[#0077c0] hover:bg-[#0077c0] hover:opacity-75 text-white rounded-full max-w-xs mt-10">
            Join Us
            <ArrowRight className="w-6 h-6 ml-2" />
          </Button>
        </div>
        <div className="p-10">
          <div className="hidden md:block relative w-full rounded-md bg-[#F2F2F2] h-[480px]">
            <Image
              src={
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              width={350}
              height={350}
              alt="about image"
              className="object-cover absolute -bottom-5 -left-14 rounded-md"
            />
            <Image
              src={
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              width={400}
              height={400}
              alt="about image"
              className="absolute -top-5 -right-14 object-cover rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="px-10">
            <div className="bg-[#F2F2F2] mx-auto w-[390px] h-[300px] rounded-md relative">
              <Image
                alt="about image 2"
                src={
                  "https://images.unsplash.com/photo-1591871987673-f1513e38493b?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                width={400}
                height={400}
                className="object-cover rounded-md absolute top-5 -bottom-5 left-5 right-5"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4 text-sm text-muted-foreground">
            <span className="text-lg text-[#0079c0] font-bold">Features</span>
            <p className="text-2xl font-semibold leading-normal">
              We are always working to provide you best of the features in all
              aspects.
            </p>
            <p>
              At WEEKENDUX the chief determination is to clear the minds of our
              students about their goals, while making them consistent in their
              ambitions and pushing them to be confident for their journey
              towards the course of time.
            </p>
            <p>
              You will find every little thing on the internet in just a click
              of hand, but here we admire that without knowledge and practice
              the internet may even also fail you in your life.
            </p>
            <Button className="bg-[#0077c0] hover:bg-[#0077c0] hover:opacity-75 text-white rounded-full max-w-xs mt-10">
              Learn More
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      <div className="p-10"></div>
    </section>
  );
};

export default AboutPage;
