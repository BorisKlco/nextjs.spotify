"use client";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from "@/app/(hooks)/useAuthModal";
import { useUser } from "@/app/(hooks)/useUser";
import useUploadModal from "@/app/(hooks)/useUploadModal";

const Library = () => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user } = useUser();

  const handleUpload = () => {
    if (!user) {
      return authModal.onOpen();
    }

    return uploadModal.onOpen();
    console.log("Clicking master!");
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-5">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          size={20}
          onClick={handleUpload}
          className="text-neutral-400 cursor-pointer hover:text-white transition duration-200"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">Song List</div>
    </div>
  );
};

export default Library;
