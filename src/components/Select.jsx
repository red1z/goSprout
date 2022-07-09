import classNames from "classnames";
import { ErrorMessage, useField } from "formik";
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { ErrorMsg, useCheckError } from "./InputLabel";

export default function Select({ children, label, name, message, width }) {
  const [field, meta] = useField(name);
  const { errorMsg, isError } = useCheckError(name);
  return (
    <div className="flex flex-col gap-2 w-full">
      <label
        htmlFor={label}
        className={classNames(
          "font-medium text-base text-gray-400 capitalize select-none",
          isError && "text-red-400"
        )}
      >
        {label}
      </label>
      <div style={{ width: width && `${width}px` }}>
        <div className="relative">
          <select
            {...field}
            name={name}
            id={label}
            className={classNames(
              "w-full py-3 px-4 border border-gray-400 rounded-md focus:outline-gray-600 capitalize text-gray-700 cursor-pointer appearance-none",
              isError && "border-red-400 focus:outline-red-500 text-red-400"
            )}
          >
            {children}
          </select>
          <span
            className={classNames(
              "absolute top-1/2 text-gray-500 -translate-y-1/2 right-3 pointer-events-none",
              isError && "!text-red-400"
            )}
          >
            <BiChevronDown size={28} />
          </span>
        </div>
        {message && <ErrorMsg name={name} />}
      </div>
    </div>
  );
}
