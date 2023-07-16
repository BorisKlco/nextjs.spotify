"use client";
import useUploadModal from "@/app/(hooks)/useUploadModal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { Input, Modal } from ".";
import toast from "react-hot-toast";
import uniqid from "uniqid";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/app/(hooks)/useUser";
import { useRouter } from "next/navigation";

export default function UploadModal() {
  const uploadModal = useUploadModal();
  const [isLoading, setIsLoading] = useState(false);
  const supaClient = useSupabaseClient();
  const { user } = useUser();
  const router = useRouter();

  const { register, reset, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      uploadModal.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      setIsLoading(true);

      const imgFile = values.image?.[0];
      const songFile = values.song?.[0];
      console.log(imgFile, songFile, values.song);

      if (!imgFile || !songFile) {
        toast.error("Missing fields");
        return;
      }

      //Song
      const uID = uniqid();
      const { data: songData, error: songError } = await supaClient.storage
        .from("songs")
        .upload(`song-${values.title}-${uID}`, songFile, {
          cacheControl: "3600",
          upsert: false,
        });

      if (songError) {
        setIsLoading(false);
        return toast.error("Error while uploading song");
      }

      //Image
      const { data: imgData, error: imgError } = await supaClient.storage
        .from("images")
        .upload(`image-${values.title}-${uID}`, imgFile, {
          cacheControl: "3600",
          upsert: false,
        });

      if (imgError) {
        setIsLoading(false);
        console.log(imgError);
        return toast.error("Error while uploading image");
      }

      const { error: supaError } = await supaClient.from("songs").insert({
        user_id: user?.id,
        title: values.title,
        author: values.author,
        image_path: imgData.path,
        song_path: songData.path,
      });

      if (supaError) {
        setIsLoading(false);
        return toast.error(supaError.message);
      }

      router.refresh();
      setIsLoading(false);
      toast.success("Song uploaded");
      reset();
      uploadModal.onClose();
    } catch (error) {
      toast.error("Something went wrong, try again.");
    }
  };

  return (
    <Modal
      title="Add Song"
      description="Upload MP3 file."
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <Input
          id="title"
          disabled={isLoading}
          {...register("title", { required: true })}
          placeholder="Song Title"
        />
        <Input
          id="author"
          disabled={isLoading}
          {...register("author", { required: true })}
          placeholder="Song author"
        />
        <div>
          <div className="pb-1">
            Song file
            <Input
              id="song"
              type="file"
              disabled={isLoading}
              accept=".mp3"
              {...register("song", { required: true })}
            />
          </div>
        </div>
        <div>
          <div className="pb-1">
            Song image
            <Input
              id="image"
              type="file"
              disabled={isLoading}
              accept="image/*"
              {...register("image", { required: true })}
            />
          </div>
        </div>
        <button
          disabled={isLoading}
          type="submit"
          className="w-full p-2 rounded-full bg-green-600 font-bold text-black"
        >
          Create
        </button>
      </form>
    </Modal>
  );
}
