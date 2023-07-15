"use client";
import useUploadModal from "@/app/(hooks)/useUploadModal";
import Modal from "./Modal";

export default function UploadModal() {
  const uploadModal = useUploadModal();

  const onChange = (open: boolean) => {
    if (!open) {
      uploadModal.onClose();
    }
  };

  return (
    <Modal
      title="Upload"
      description="Upload Modal"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      Upload Modal
    </Modal>
  );
}
