import classNames from "classnames";
import React from "react";
import InputLabel, { useCheckError } from "./InputLabel";

export default function ThreeInput() {
  const { isError: isErrorDD } = useCheckError("DD");
  const { isError: isErrorMM } = useCheckError("MM");
  const { isError: isErrorYY } = useCheckError("YY");
  return (
    <div className="space-y-2">
      <label
        htmlFor=""
        className={classNames(
          "font-medium text-base capitalize select-none",
          isErrorDD || isErrorMM || isErrorYY ? "text-red-400" : "text-gray-400"
        )}
      >
        date of birth
      </label>
      <div className="flex gap-3 items-center">
        <InputLabel placeholder="DD" type="text" name={"DD"} />
        <span className="text-2xl font-bold text-gray-400">/</span>
        <InputLabel placeholder="MM" type="text" name={"MM"} />
        <span className="text-2xl font-bold text-gray-400">/</span>
        <InputLabel placeholder="YY" type="text" name={"YY"} />
      </div>
    </div>
  );
}
