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
    <div className="flex items-center gap-x-2 pb-2 overflow-x-auto">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          value={item.id}
          label={item.name}
          icon={iconMap[item.name]}
        />
      ))}
    </div>
  );
};

export default Categories;
