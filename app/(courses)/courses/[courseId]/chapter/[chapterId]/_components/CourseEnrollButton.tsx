"use client";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import React from "react";
const CourseEnrollButton = ({
  courseId,
  price,
}: {
  courseId: string;
  price: number;
}) => {
  return (
    <Button size={"sm"} className="w-full md:w-auto">
      Enroll for {formatPrice(price)}
    </Button>
  );
};

export default CourseEnrollButton;
