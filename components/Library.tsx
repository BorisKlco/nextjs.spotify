"use client";
import { TbPlaylist } from "react-icons/tb";

const Library = () => {
  const handleUpload = () => {
    //upload handler
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-5">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist />
        </div>
      </div>
    </div>
  );
};

export default Library;
