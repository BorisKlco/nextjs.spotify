"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { NavigationButton } from ".";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { GoHome } from "react-icons/go";
import { BiSearchAlt } from "react-icons/bi";
import useAuthModal from "@/app/(hooks)/useAuthModal";

type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

const Header = ({ children, className }: HeaderProps) => {
  const authModal = useAuthModal();
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
            iconSize={35}
            classIcon="text-white"
            classButton="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
            handleClick={() => router.forward()}
          />
          <NavigationButton
            icon={RxCaretRight}
            iconSize={35}
            classIcon="text-white"
            classButton="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
            handleClick={() => router.back()}
          />
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <NavigationButton
            icon={GoHome}
            iconSize={20}
            classIcon="text-black"
            classButton="rounded-full p-2 bg-white items-center justify-center hover:opacity-75 transition"
          />
          <NavigationButton
            icon={BiSearchAlt}
            iconSize={20}
            classIcon="text-black"
            classButton="rounded-full p-2 bg-white items-center justify-center hover:opacity-75 transition"
          />
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <>
            <NavigationButton
              icon="NONE"
              handleClick={authModal.onOpen}
              classButton="rounded-full border-transparent text-black px-3 py-3 hover:opacity-75 transition bg-transparent text-neutral-300 font-medium "
              optionalText="Sign Up"
            />
            <NavigationButton
              icon="NONE"
              handleClick={authModal.onOpen}
              classButton="rounded-full border-transparent text-black hover:opacity-75 transition bg-white px-6 py-2"
              optionalText="Log in"
            />
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
