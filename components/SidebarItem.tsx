import { IconType } from "react-icons";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type SidebarItemProps = {
  icon: IconType;
  iconActive: IconType;
  label: string;
  active?: boolean;
  href: string;
};

const SidebarItem = ({
  icon: Icon,
  iconActive: IconActive,
  label,
  active,
  href,
}: SidebarItemProps) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer
      hover:text-white transition duration-200 text-neutral-400 py-1`,
        active && "text-white"
      )}
    >
      {active ? <IconActive size={26} /> : <Icon size={26} color="white" />}
      <p className="truncate w-full">{label}</p>
    </Link>
  );
};

export default SidebarItem;
