"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { NavigationButton } from ".";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

const Header = ({ children, className }: HeaderProps) => {
  const router = useRouter();
  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-600 p-6`,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <NavigationButton
            icon={RxCaretLeft}
            handleClick={() => router.forward()}
          />
          <NavigationButton
            icon={RxCaretRight}
            handleClick={() => router.back()}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
