import React, { useContext } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { MyContext } from "../context-api/ContextApi";
import { useCheckError } from "./InputLabel";

export default function DownButton() {
  const { setIndex } = useContext(MyContext);
  return (
    <button
      onClick={() => setIndex((prev) => prev - 1)}
      type="button"
      className="flex items-center gap-3 text-white bg-gray-600 px-6 py-2 rounded-md text-2xl focus:outline-gray-600 focus:outline-offset-2 focus:outline"
    >
      <span>
        <FaChevronLeft />
      </span>
      Back{" "}
    </button>
  );
}
