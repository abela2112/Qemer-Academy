"use client";
import Image from "next/image";
import React from "react";
import user from "@/public/user.png";
import { Star, StarHalf, StarIcon, StarOffIcon } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

type Props = {};
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = (props: Props) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <section className="w-full bg-[#f6f8ff] pt-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-6 md:px-20 py-10 lg:w-[80%] mx-auto">
        <div className="text-left flex flex-col space-y-4">
          <div className="flex items-center gap-x-2">
            <div className="border border-b-2 w-10" />
            <span className="text-[#00a7ff]">Testimonials</span>
          </div>
          <h2 className="text-3xl font-bold">
            What Our Users Say About Our Platform
          </h2>
          <p className="text-muted-foreground">
            TOTC has got more than 100k positive ratings from our users around
            the world.
          </p>
          <p className="text-muted-foreground">
            {" "}
            Some of the students and teachers were greatly helped by the
            Skilline.
          </p>
        </div>
        <div>
          <Carousel
            className="w-[90%] mx-auto"
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {Array.from({ length: 3 }).map((_, i) => (
                <CarouselItem key={i}>
                  <div className="relative">
                    <Image
                      src={user}
                      height={400}
                      alt="user"
                      className="rounded-md object-cover"
                    />
                    <div className="absolute p-5 rounded-lg flex gap-x-3 border border-l-8 border-l-[#F67766] bottom-2 left-8 bg-white max-w-sm">
                      <div className="border  border-transparent border-l-muted-foreground" />
                      <div className="flex flex-col gap-y-4 text-muted-foreground">
                        <p className="text-xs">
                          "Thank you so much for your help. It's exactly what
                          I've been looking for. You won't regret it. It really
                          saves me time and effort. TOTC is exactly what our
                          business has been lacking."
                        </p>
                        <div className="flex justify-between">
                          <p className="text-sm">Gloria Rose</p>
                          <div className="flex flex-col gap-x-2">
                            <div className="flex items-center">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 mr-1 text-[#fba333]"
                                />
                              ))}
                            </div>
                            <span className="text-xs mt-2">
                              12 reviews at Yelp
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
{
  /* <div className="relative">
                  <Image
                    src={user}
                    height={500}
                    alt="user"
                    className="rounded-md object-cover"
                  />
                  <div className="absolute p-5 rounded-lg flex gap-x-3 border border-l-8 border-l-[#F67766] bottom-6 left-6 bg-white">
                    <div className="border  border-transparent border-l-muted-foreground w-2" />
                    <div>
                      <p className="text-sm">
                        "Thank you so much for your help. It's exactly what I've
                        been looking for. You won't regret it. It really saves
                        me time and effort. TOTC is exactly what our business
                        has been lacking."
                      </p>
                      <div className="flex justify-between">
                        <p>Gloria Rose</p>
                        <div>
                          <Star />
                          <span>12 reviews at Yelp</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */
}
