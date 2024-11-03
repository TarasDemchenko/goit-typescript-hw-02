import Modal from "react-modal";
import s from "./ImageModal.module.css";
import { FC } from "react";
// import { useEffect } from "react";
Modal.setAppElement("#root");

interface ImageModalProps {
  modalIsOpen: boolean
  closeModal: () => void
  selectedImage: string | null

}



const ImageModal:FC<ImageModalProps> = ({ modalIsOpen, closeModal, selectedImage }) => {
  //   useEffect(() => {
  //     const handleEsc = (e) => {
  //       if (e.key === "Escape") {
  //         closeModal();
  //       }
  //     };
  //   });
  return (
    <div className={s.overlay}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={s.modal}
        contentLabel="Example Modal"
      >
        {selectedImage && (
          <img className={s.modalImage} src={selectedImage} alt="Selected" />
        )}
        {/* <button onClick={closeModal}>close</button> */}
      </Modal>
    </div>
  );
};

export default ImageModal;
