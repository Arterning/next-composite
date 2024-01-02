"use client";

import { Logo } from "./logo";
import { SidebarItem } from "./sidebar-items";
import { BarChart, Compass, Layout, List, ProjectorIcon } from "lucide-react";

const routes = [
  {
    icon: List,
    label: "DashBoard",
    href: "/dashboard",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/analytics",
  },
  {
    icon: ProjectorIcon,
    label: "Projects",
    href: "/projects",
  },
];

export const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full">
          {routes.map((route) => (
            <SidebarItem
              key={route.href}
              icon={route.icon}
              label={route.label}
              href={route.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
