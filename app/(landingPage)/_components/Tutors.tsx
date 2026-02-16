import React from "react";
import { Reveal } from "@/components/Reveal";

type Props = {};
import { mentorsData } from "@/data/mentors";
import Image from "next/image";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
const Tutors = (props: Props) => {
  return (
    <section className="p-6 md:px-20 py-8 bg-slate-50/50">
      <Reveal width="100%">
        <div className="flex flex-col items-center w-full mx-auto container">
          <span className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-2">Our Tutors</span>
          <h2 className="text-3xl font-bold text-center mb-4 text-slate-800">Meet the Experts</h2>
          <p className="text-base w-full md:w-[600px] mx-auto text-center text-slate-500 mb-8 leading-relaxed">
            Learn from industry leaders and experienced professionals who are passionate about sharing their knowledge.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full max-w-7xl">
            {mentorsData.map((mentor, i) => (
              <Card
                key={i}
                className="flex flex-col items-center text-center bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 relative hover:z-20 group hover:border-[#0079ff]"
              >
                <CardHeader className="pt-8 pb-4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-slate-50 group-hover:border-blue-50 transition-colors">
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      className="object-cover"
                      fill
                    />
                  </div>
                </CardHeader>

                <CardContent className="pb-8 px-6">
                  <h3 className="font-bold text-lg text-slate-800 mb-1">{mentor.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">
                    {mentor.title}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {mentor.description}
                  </p>
                  
                  <div className="flex justify-center gap-x-4">
                    <a href="#" className="p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                      <FaLinkedin size={18} />
                    </a>
                    <a href="#" className="p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-blue-100 hover:text-blue-400 transition-colors">
                      <FaTwitter size={18} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

/**
 * MentorCard component
 * @param {Mentor} props - component props
 * @returns {React.ReactElement} - component JSX
 */
// const MentorCard = (): React.ReactElement => {
//   return (
//     <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
//       <Image
//         src={props.image}
//         alt={props.name}
//         className="w-24 h-24 rounded-full"
//       />
//       <h3 className="text-lg font-semibold">{props.name}</h3>
//       <p className="text-sm text-center">{props.title}</p>
//     </div>
//   );
// };

export default Tutors;
