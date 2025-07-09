import React from "react";

type ModalProps = {
  title: string;
  imgSrc: string;
  description: string;
  closeModal: () => void;
};

const Modal: React.FC<ModalProps> = ({ title, imgSrc, description, closeModal }) => {
  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="bg-white rounded-lg max-w-lg w-full p-6 shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-[1.02]"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <button
            onClick={closeModal}
            className="text-gray-600 hover:text-gray-900 font-bold text-3xl leading-none"
            aria-label="Cerrar modal"
          >
            &times;
          </button>
        </div>
        <img
          src={imgSrc}
          alt={title}
          className="mb-4 w-full h-auto rounded object-contain"
        />
        <p className="text-gray-700 whitespace-pre-line">{description}</p>
      </div>
    </div>
  );
};

export default Modal;
