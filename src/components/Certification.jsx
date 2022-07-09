import { Formik } from "formik";
import React, { useState } from "react";
import InputLabel from "./InputLabel";
import PrevButton from "./PrevButton";
import SubmitButton from "./SubmitButton";
import * as Yup from "yup";

import { FaChevronRight } from "react-icons/fa";
import { PulseLoader } from "react-spinners";

export default function Certification() {
  const [agreementValue, setAgreementValue] = useState({ agreement: "" });
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");

  const onSubmit = (values, actions) => {
    setAgreementValue(values);
    setLoading(true);
    setTimeout(() => {
      console.log("Form Submitted");
      window.location.reload();
    }, 2300);
  };
  const icon = loading ? (
    <PulseLoader color={color} speedMultiplier={0.8} size={12} />
  ) : (
    <FaChevronRight />
  );

  return (
    <div className="space-y-9">
      <h2 className="text-4xl font-bold text-gray-400">Certification</h2>
      <h2 className="text-[30px] text-[#8F9198] lg:w-[838px]">
        I certify that, to the best of my knowledge, the info provided in this
        document is true and complete in all respects.
      </h2>
      <Formik
        initialValues={agreementValue}
        validationSchema={Yup.object().shape({
          agreement: Yup.string().required().label("Agreement:"),
        })}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="w-[80%]">
                <InputLabel
                  name={"agreement"}
                  message
                  label={"Sign Agreement"}
                />
              </div>
              <div className="flex items-center justify-between !mt-24">
                <PrevButton />
                <SubmitButton icon={icon} />
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
