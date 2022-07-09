import classNames from "classnames";
import { useField } from "formik";
import React from "react";
import { ErrorMsg, useCheckError } from "./InputLabel";

function TextArea({ label, height = 120, name }) {
  const [field, meta] = useField(name);
  const { isError } = useCheckError(name);

  return (
    <div className="space-y-2 w-full">
      <label
        className={classNames(
          "font-medium text-base text-gray-400 capitalize select-none",
          isError && "text-red-400"
        )}
        htmlFor={label}
      >
        {label}
      </label>
      <div className="-space-y-1.5">
        <textarea
          style={{ height: `${height}px` }}
          className={classNames(
            "w-full py-2.5 px-3 border border-gray-400 rounded-md focus:outline-gray-600",
            isError && "border-red-400"
          )}
          id={label}
          {...field}
        ></textarea>

        <ErrorMsg name={name} />
      </div>
    </div>
  );
}

export default TextArea;
