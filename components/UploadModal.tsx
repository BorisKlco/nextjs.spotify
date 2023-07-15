"use client";
import useUploadModal from "@/app/(hooks)/useUploadModal";
import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export default function UploadModal() {
  const uploadModal = useUploadModal();

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
    //handle subabase uploas
  };

  return (
    <Modal
      title="Add Song"
      description="Upload MP3 file."
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input />
      </form>
    </Modal>
  );
}
