import React from "react";
import { FaChevronRight } from "react-icons/fa";

function SubmitButton({ icon }) {
  return (
    <button
      type="submit"
      className="flex items-center gap-3 text-white bg-[coral] px-6 py-2 rounded-md text-2xl focus:outline-[coral] focus:outline-offset-2 focus:outline"
    >
      Submit<span>{icon}</span>
    </button>
  );
}

export default SubmitButton;
