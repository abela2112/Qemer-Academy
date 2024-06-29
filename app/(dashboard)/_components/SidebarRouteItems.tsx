"use client";

import { LucideIcon } from "lucide-react";

interface SidebarRouteItemsProps {
  icon: LucideIcon;
  label: string;
  href: string;
}
const SidebarRouteItems = ({ icon, label, href }: SidebarRouteItemsProps) => {
  return <div>sidebar item!</div>;
};

export default SidebarRouteItems;
