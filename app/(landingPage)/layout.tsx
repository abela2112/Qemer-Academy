import React from "react";
import Navbar from "./_components/navbar";
import Footer from "./_components/Footer";
import { db } from "@/lib/db";

type Props = {
  children: React.ReactNode;
};

const LandingLayout = async (props: Props) => {
  const catagories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });
  return (
    <>
      <Navbar categories={catagories} />
      {props.children}
      <Footer />
    </>
  );
};

export default LandingLayout;
