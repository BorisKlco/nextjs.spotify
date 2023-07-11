"use client";

import { ReactNode, useMemo } from "react";
import { usePathname } from "next/navigation";
import { GoHome, GoHomeFill } from "react-icons/go";
import { BiSearch, BiSearchAlt } from "react-icons/bi";
import { Box, SidebarItem, Library } from ".";

type SidebarProps = {
  children: ReactNode;
};
const Sidebar = ({ children }: SidebarProps) => {
  const pathName = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: GoHome,
        iconActive: GoHomeFill,
        label: "Home",
        active: pathName !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        iconActive: BiSearchAlt,
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
            {routes.map((route) => (
              <SidebarItem key={route.label} {...route} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Sidebar;
