import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineDeleteForever } from "react-icons/md";

const Modal = ({ label, description, isOpen, setIsOpen, deleteButton }) => {
  const handleCloseButton = () => {
    setIsOpen(false);
  };

  console.log("modal is opened");

  return (
    <div
      className={`${
        isOpen ? "fixed" : "hidden"
      } inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]`}
    >
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 relative">
        <IoMdClose
          className="w-6 h-6 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right"
          onClick={handleCloseButton}
        />
        <div className="my-8 text-center">
          <MdOutlineDeleteForever className="w-32 h-32 fill-red-500 inline" />
          <h4 className="text-gray-800 text-lg font-semibold mt-4">{label}</h4>
          <p className="text-sm text-gray-600 mt-4">{description}</p>
        </div>
        <div className="flex flex-col space-y-2">
          {deleteButton}
          <button
            type="button"
            onClick={handleCloseButton}
            className="px-4 py-2 rounded-lg text-gray-800 text-sm tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
