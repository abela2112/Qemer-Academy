import React from "react";

type Props = {};
import { mentorsData } from "@/data/mentors";
import Image from "next/image";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
const Tutors = (props: Props) => {
  return (
    <section className="p-6 md:px-10 py-8">
      <div className="flex flex-col items-center w-full mx-auto">
        <span className="text-lg capitalize text-[#0079ff]">Tutor</span>
        <h2 className="text-3xl font-bold text-center my-2">Meet the Heroes</h2>
        <p className="text-sm w-full md:w-[500px] mx-auto  text-center text-[#7c7c94]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure sed
          quaerat nam, quos omnis odio optio labore aut autem quae magni
          dignissimos facilis tempora quo ut officia adipisci molestias officiis
        </p>

        <div className="flex  flex-col md:flex-row mt-10 items-center gap-x-4 py-4">
          {mentorsData.map((mentor, i) => (
            <Card
              key={i}
              className="flex flex-col gap-2 items-center text-center mt-5 bg-muted rounded-md hover:shadow-md hover:scale-110 cursor-pointer transition py-4"
            >
              <CardHeader>
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-15 h-15 object-cover rounded-full my-3"
                />
              </CardHeader>

              <CardContent>
                <span className="font-semibold">{mentor.name}</span>
                <p className="text-[#0079ff] text-clip overflow-hidden">
                  {mentor.title}
                </p>
                <p className="text-muted-foreground text-sm">
                  {mentor.description}
                </p>
              </CardContent>
              <div className="flex gap-x-2 mt-2 cursor-pointer">
                <FaLinkedin
                  size={24}
                  className="hover:text-[#0079ff] hover:scale-105 "
                />
                <FaTwitter
                  size={24}
                  className="hover:text-[#0079ff] hover:scale-105"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
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
