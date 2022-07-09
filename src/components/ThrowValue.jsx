import React, { useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";
import { useFormikContext } from "formik";

function ThrowValue({ value, index }) {
  const { setFieldValue, values } = useFormikContext();
  function findAndDelete() {
    setFieldValue(
      "search",
      values["search"].filter((_, i) => i !== index)
    );
  }

  return (
    <div className="border border-slate-700 text-slate-700  py-1.5 rounded-md flex justify-between items-center">
      <span className="px-3 =">{value}</span>
      <span className="px-2 cursor-pointer" onClick={findAndDelete}>
        <MdClose size={18} />
      </span>
    </div>
  );
}

export default ThrowValue;
