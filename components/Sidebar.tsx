"use client";

import { ReactNode, useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiHome, HiSearch } from "react-icons/hi";
import { Box } from ".";

type SidebarProps = {
  children: ReactNode;
};
const Sidebar = ({ children }: SidebarProps) => {
  const pathName = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathName !== "/search",
        href: "/",
      },
      {
        icon: HiSearch,
        label: "Search",
        active: pathName === "/search",
        href: "/search",
      },
    ],
    [pathName]
  );

  return (
    <div className="flex h-full">
      <div
        className="hidden 
      md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2"
      >
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((route) => "Hi")}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">SongLib</Box>
      </div>
    </div>
  );
};

export default Sidebar;
