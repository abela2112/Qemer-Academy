import React from "react";

type Props = {};

const Oursuccess = (props: Props) => {
  return (
    <section className="bg-[#f6f8ff] md:px-20 px-6 py-8">
      <div className="flex flex-col items-center md:w-[80%] mx-auto">
        <h2 className="text-3xl font-bold text-center my-2">Our success</h2>
        <p className="text-sm w-full md:w-[500px] mx-auto  text-center text-[#7c7c94]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure sed
          quaerat nam, quos omnis odio optio labore aut autem quae magni
          dignissimos facilis tempora quo ut officia adipisci molestias officiis
        </p>
        <div className="flex mt-10 flex-col md:flex-row gap-y-4 md:gap-x-4 w-full justify-around">
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text">
              15K+
            </span>
            <span className="font-semibold capitalize">students</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text">
              75%
            </span>
            <span className="font-semibold capitalize">success</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text">
              35
            </span>
            <span className="font-semibold capitalize">questions</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text">
              26
            </span>
            <span className="font-semibold capitalize">Teachers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text">
              16
            </span>
            <span className="font-semibold capitalize">
              years of Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Oursuccess;
