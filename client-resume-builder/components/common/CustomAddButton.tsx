import React from "react";
import { FaPlus } from "react-icons/fa";

interface AddBtnProps {
  label: string;
  onClick: () => void;
}

function CustomAddButton({ label, onClick }: AddBtnProps) {
  return (
    <button
      className="flex items-center gap-2 rounded-3xl border-2 border-gray-400 px-5 font-bold py-1.5"
      onClick={onClick}
    >
      <span>
        <FaPlus />
      </span>
      <span>{label}</span>
    </button>
  );
}

export default CustomAddButton;
