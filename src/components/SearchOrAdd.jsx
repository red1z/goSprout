import React, { useEffect, useId, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import ThrowValue from "./ThrowValue";
import { useFormikContext } from "formik";

function SearchOrAdd() {
  const addInRef = useRef();
  const valueWrapper = useRef();

  const { setFieldValue, values } = useFormikContext();

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const myElement = addInRef.current;

    function getAndThrow(e) {
      if (e.keyCode == 13) {
        setFieldValue("search", [...values.search, inputValue]);
        setInputValue("");
      }
    }
    myElement.addEventListener("keypress", getAndThrow);

    return () => {
      myElement.removeEventListener("keypress", getAndThrow);
    };
  }, [values, inputValue]);

  return (
    <div className="space-y-4">
      <div className="space-y-2 w-full">
        <label
          className="font-medium text-base text-gray-400 capitalize select-none"
          htmlFor={"search_input"}
        >
          What industries do have experience with?
        </label>
        <div className="relative">
          <input
            ref={addInRef}
            id="search_input"
            className="w-full py-2.5 pr-3 pl-14 border border-gray-400 rounded-md focus:outline-gray-600 placeholder:text-gray-400 placeholder:font-normal"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Search or add"
            name="search"
          />
          <span className="absolute text-gray-400 top-1/2 left-[18px] -translate-y-1/2">
            <BiSearch size={28} />
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-gray-400 text-lg font-medium">Selected industries</p>
        <div ref={valueWrapper} className="flex flex-wrap gap-5">
          {values["search"] &&
            values["search"].map(
              (value, i) =>
                value && (
                  <ThrowValue key={Math.random()} value={value} index={i} />
                )
            )}
        </div>
      </div>
    </div>
  );
}

export default SearchOrAdd;
