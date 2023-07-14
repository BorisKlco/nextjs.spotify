"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { IoMdClose } from "react-icons/io";
import NavigationButton from "./NavigationButton";

type ModalProps = {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: ReactNode;
};

export default function Modal({
  isOpen,
  onChange,
  title = "Default Title",
  description = "Default description",
  children,
}: ModalProps) {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="
          bg-neutral-900-90 backdrop-blur-sm fixed inset-0
          "
        />
        <Dialog.Content
          className="
        fixed top-[50%] left-[50%] w-full h-full p-[25px]
        bg-neutral-800 border border-neutral-700 rounded-md drop-shadow-md 
        translate-x-[-50%] translate-y-[-50%] focus:outline-none
        max-h-full
        md:max-w-[450px] md:max-h-[85vh] md:w-[90vw] md:h-auto
        "
        >
          <Dialog.Title className="mb-4 text-xl text-center font-bold">
            {title}
          </Dialog.Title>
          <Dialog.Description className="mb-5 text-sm leading-normal text-center">
            {description}
          </Dialog.Description>
          <div>{children}</div>
          <Dialog.Close asChild>
            <NavigationButton
              icon={IoMdClose}
              classButton="
                absolute top-[10px] right-[10px] w-[25px] h-[25px] 
                inline-flex items-center justify-center
                rounded-full text-neutral-400
                hover:text-white focus:outline-none
                "
            />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
