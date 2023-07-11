import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type BoxProps = {
  children: ReactNode;
  className?: string;
};

const Box = ({ children, className }: BoxProps) => {
  return (
    <div
      className={twMerge(`bg-neutral-900 rounded-lg h-fit w-full`, className)}
    >
      {children}
    </div>
  );
};

export default Box;
