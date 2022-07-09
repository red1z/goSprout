import classNames from "classnames";
import { useFormikContext } from "formik";
import React, { useEffect } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import InputLabel, { ErrorMsg, useCheckError } from "./InputLabel";

export default function Linkedin({ icon, name, label, placeholder, id }) {
  const { getFieldProps } = useFormikContext();
  const { isError } = useCheckError(name);

  return (
    <>
      <div className="space-y-2 w-full">
        <label
          htmlFor=""
          className={classNames(
            "font-medium text-base text-gray-400 capitalize select-none",
            isError && "text-red-400"
          )}
        >
          {label}
        </label>
        <div className="relative">
          <input
            placeholder={placeholder && placeholder}
            type="text"
            {...getFieldProps(name)}
            className={classNames(
              "w-full py-2.5 pl-10 pr-3 border border-gray-400 rounded-md focus:outline-gray-600",
              isError && "border-red-400 focus:outline-red-500 text-red-400"
            )}
          />
          <span
            className={classNames(
              "absolute top-1/2 left-3 -translate-y-1/2 text-gray-400",
              isError && "text-red-400"
            )}
          >
            {icon}
          </span>
        </div>
        <ErrorMsg name={name} />
      </div>
    </>
  );
}
