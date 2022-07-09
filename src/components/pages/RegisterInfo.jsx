import React, { useContext, useState } from "react";
import { FaQuestion } from "react-icons/fa";
import Personal from "../Personal";
import TradeInfo from "../TradeInfo";
import GosProut from "../GosProut";
import Certification from "../Certification";
import Wellcome from "../Wellcome";
import classNames from "classnames";
import { MyContext } from "../../context-api/ContextApi";

const data = [
  {
    name: "Personal",
    componenet: <Personal />,
  },
  {
    name: "Trade Information",
    componenet: <TradeInfo />,
  },
  {
    name: "GoSprout",
    componenet: <GosProut />,
  },
  {
    name: "Certification",
    componenet: <Certification />,
  },
];

export default function RegisterInfo() {
  const { maxIndex, index, setIndex, setMaxIndex } = useContext(MyContext);
  return (
    <div className="font-nunito">
      <header className="py-5">
        <div className="px-10 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-slate-700">
            Logo
          </a>
          <p className="flex items-center gap-2 text-slate-600">
            <span className="text-lg">Need Help</span>
            <FaQuestion size={20} />
          </p>
        </div>
      </header>

      <main className="mt-12">
        <div className="container-md grid grid-cols-1 md:grid-cols-[1fr,3fr] lg:grid-cols-[250px,800px] md:gap-40 gap-10">
          <div className="space-y-7">
            <Wellcome />
            <ul className="border-l-4 border-transparent md:border-gray-400/50 pl-6 grid grid-cols-2 md:grid-cols-1">
              {data.map(({ name }, i) => {
                return (
                  <li
                    onClick={() => {
                      if (index > 0)
                        setMaxIndex((prev) => (prev <= index ? index : prev));
                      if (i <= maxIndex) setIndex(i);
                    }}
                    key={Math.random()}
                    className={classNames(
                      "py-5 text-xl lg:text-2xl font-semibold text-gray-300 relative before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-[29px] before:h-[80%] before:w-1.5 before:rounded-md cursor-pointer",
                      index === i && "before:bg-slate-800 !text-slate-800"
                    )}
                  >
                    {name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="md:!mt-7">{data[index].componenet}</div>
        </div>
      </main>
    </div>
  );
}
