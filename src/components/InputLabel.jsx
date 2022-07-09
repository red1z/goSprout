import React from "react";
import { useField, useFormikContext } from "formik";
import { BsExclamationLg } from "react-icons/bs";
import classNames from "classnames";

export default function InputLabel({
  type,
  label,
  placeholder,
  name,
  message,
}) {
  const [field, meta] = useField(name);
  const { errorMsg, isError } = useCheckError(name);

  if (name) {
    return (
      <div>
        <div className="space-y-2 w-full">
          {label && (
            <label
              htmlFor={label}
              className={classNames(
                "font-medium text-base text-gray-400 capitalize select-none",
                isError && "text-red-400"
              )}
            >
              {label}
            </label>
          )}
          <input
            className={classNames(
              "w-full py-2.5 px-3 border border-gray-400 rounded-md focus:outline-gray-600",
              isError && "border-red-400 focus:outline-red-500 text-red-400"
            )}
            type={type}
            id={label}
            placeholder={placeholder}
            {...field}
          />
        </div>
        {message && <ErrorMsg name={name} />}
      </div>
    );
  } else {
    return (
      <div className="space-y-2 w-full">
        <label
          htmlFor={label}
          className={
            "font-medium text-base text-gray-400 capitalize select-none"
          }
        >
          {label}
        </label>
        <input
          className="w-full py-2.5 px-3 border border-gray-400 rounded-md focus:outline-gray-600"
          type={type}
          id={label}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

export const ErrorMsg = ({ name }) => {
  const { isError, errorMsg } = useCheckError(name);
  return (
    <>
      {isError && (
        <div className="py-0.5 px-1 flex gap-1 items-center text-red-400">
          <BsExclamationLg size={14} />
          <p className="font-medium text-sm translate-y-0.5">
            {isError && errorMsg}
          </p>
        </div>
      )}
    </>
  );
};

export const useCheckError = (name) => {
  const { errors, touched } = useFormikContext();
  const isError = errors[name] && touched[name];

  return {
    isError,
    errorMsg: isError ? errors[name] : null,
  };
};
