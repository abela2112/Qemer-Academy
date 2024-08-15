"use client";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
const CourseEnrollButton = ({
  courseId,
  price,
}: {
  courseId: string;
  price: number;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleEnroll = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(`/api/course/${courseId}/checkout`);
      // toast.success("Checkout successfull");
      window.location.assign(data.url);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Button
      onClick={handleEnroll}
      disabled={isLoading}
      size={"sm"}
      className="w-full md:w-auto"
    >
      Enroll for {formatPrice(price)}
    </Button>
  );
};

export default CourseEnrollButton;
