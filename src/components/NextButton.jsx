import React, { useContext } from "react";
import { FaChevronRight } from "react-icons/fa";
import { MyContext } from "../context-api/ContextApi";

export default function DownButton() {
  const { index } = useContext(MyContext);

  return (
    <div className="py-16 flex items-center justify-between">
      <p className="text-red-400"> </p>
      <button
        onClick={() => console.log(index)}
        type="submit"
        className="flex items-center gap-3 text-white bg-gray-600 px-6 py-2 rounded-md text-2xl focus:outline-gray-600 focus:outline-offset-2 focus:outline"
      >
        Next{" "}
        <span>
          <FaChevronRight />
        </span>
      </button>
    </div>
  );
}
