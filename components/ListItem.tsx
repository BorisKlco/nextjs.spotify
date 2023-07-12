"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

type ListItemProps = {
  image?: string;
  name?: string;
  href?: string;
};
const ListItem = ({
  image = "/images/liked.png",
  name = "Album",
  href = "/",
}: ListItemProps) => {
  const router = useRouter();

  const handleItemClick = () => {
    //Add auth before push
    router.push(href);
  };

  return (
    <button
      className="
      relative group
      flex items-center gap-x-4
      rounded-md overflow-hidden 
    bg-neutral-100/10
    hover:bg-neutral-100/20 
      transition 
      pr-4"
    >
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image
          className="object-cover 
          transition duration-300
          brightness-90
          group-hover:contrast-125
          group-hover:scale-[1.25] 
          group-hover:rotate-2
          group-hover:brightness-100"
          src={image}
          fill
          alt="Album Image"
        />
      </div>
      <p>{name}</p>
      <div
        className="
      absolute p-4 right-5 transition
      bg-green-500 rounded-full drop-shadow-md
      flex items-center justify-center
      opacity-0
      group-hover:opacity-100
      hover:scale-[1.05]

      "
      >
        <FaPlay className="text-black" />
      </div>
    </button>
  );
};

export default ListItem;
