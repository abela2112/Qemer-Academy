"use client";
import { Category } from "@prisma/client";
import React from "react";
import { IconType } from "react-icons";
import {
  FaCode,
  FaPencilRuler,
  FaBriefcase,
  FaUserGraduate,
  FaLaptopCode,
  FaHeartbeat,
  FaCamera,
  FaMusic,
  FaLanguage,
  FaChalkboardTeacher,
  FaPaintBrush,
  FaWineGlass,
} from "react-icons/fa";
import CategoryItem from "./CategoryItem";
interface CategoriesProps {
  items: Category[];
}
const iconMap: Record<Category["name"], IconType> = {
  "Programming and Development": FaCode,
  Design: FaPencilRuler,
  Business: FaBriefcase,
  "Personal Development": FaUserGraduate,
  "IT and Software": FaLaptopCode,
  "Health and Fitness": FaHeartbeat,
  "Photography and Video": FaCamera,
  Music: FaMusic,
  "Language Learning": FaLanguage,
  "Teaching and Academics": FaChalkboardTeacher,
  "Art and Crafts": FaPaintBrush,
  Lifestyle: FaWineGlass,
};
const Categories = ({ items }: CategoriesProps) => {
  return (
    <div className="relative w-full overflow-visible">
      
      <div
        role="tablist"
        aria-label="Filter courses by category"
        className="flex items-center gap-x-3 overflow-x-auto pb-4 pt-2 px-1 snap-x snap-mandatory scroll-smooth"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {items.map((item) => (
          <div key={item.id} className="snap-start shrink-0">
            <CategoryItem
              value={item.id}
              label={item.name}
              icon={iconMap[item.name]}
            />
          </div>
        ))}
      </div>
      
      {/* Gradient Edges - Added pointer-events-none to prevent click blocking */}
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </div>
  );
};

export default Categories;
