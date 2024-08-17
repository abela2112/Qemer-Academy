import React from "react";
import Navbar from "./_components/navbar";

import Hero from "./_components/Hero";
import LogoTracker from "./_components/logo-tracker";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="relative flex flex-col w-full">
      <Navbar />
      <Hero />
      <LogoTracker />
    </div>
  );
};

export default LandingPage;
