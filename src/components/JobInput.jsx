import classNames from "classnames";
import { useField } from "formik";
import React from "react";

function JobInput({ label, ...props }) {
  return (
    <div className="space-y-2 w-full">
      <label
        htmlFor={label}
        className={classNames(
          "font-medium text-base text-gray-400 capitalize select-none"
        )}
      >
        {label}
      </label>

      <input
        {...props}
        className={classNames(
          "w-full py-2.5 px-3 border border-gray-400 rounded-md focus:outline-gray-600"
        )}
        type={"text"}
      />
    </div>
  );
}

export default JobInput;
