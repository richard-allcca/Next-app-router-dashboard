'use client';

import { usePathname } from "next/navigation";
import { JSX } from "react/jsx-dev-runtime";

interface SidebarMenuItem {
  title: string;
  subtitle: string;
  icon: JSX.Element;
  path: string;
}

export const SidebarMenuItems = ({ item }: { item: SidebarMenuItem; }) => {
  const pathName = usePathname();

  const getStyleActive = (path: string) => {
    return pathName === path ? 'bg-blue-800' : 'hover:bg-white/5';
  };

  return (
    <a
      href={item.path}
      className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 ${getStyleActive(item.path)} transition ease-linear duration-150`}
    >
      <div>
        {item.icon}
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{item.title}</span>
        <span className="text-sm text-white/50 hidden md:block">{item.subtitle}</span>
      </div>
    </a>
  );
};