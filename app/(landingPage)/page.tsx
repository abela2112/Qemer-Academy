import React from "react";
import Navbar from "./_components/navbar";

import Hero from "./_components/Hero";
import LogoTracker from "./_components/logo-tracker";
import TopCourses from "./_components/course-section";
import { getTopCourses } from "../actions/get-landingpage-course";
import { db } from "@/lib/db";
import Mentors from "./_components/mentors";
import Categories from "../(dashboard)/(routes)/search/_components/Categories";
import Oursuccess from "./_components/oursuccess";
import AboutUs from "./_components/AboutUs";
import Testimonials from "./_components/testimonials";
import Footer from "./_components/Footer";
import Tutors from "./_components/Tutors";
import CallToAction from "./_components/call-to-action";

type Props = {};

const LandingPage = async (props: Props) => {
  const data = await getTopCourses();

  return (
    <div className="relative flex flex-col w-full">
      {/* <Navbar categories={catagories} /> */}
      <Hero />
      <LogoTracker />
      <AboutUs />
      <Oursuccess />
      <TopCourses courses={data} />
      <Tutors />
      <Testimonials />
      <CallToAction />
      {/* <Footer /> */}
      {/* <Mentors courses={data} categories={catagories} /> */}
    </div>
  );
};

export default LandingPage;
