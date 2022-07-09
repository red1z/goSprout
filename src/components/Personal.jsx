import React, { useContext } from "react";
import InputLabel from "./InputLabel";
import ThreeInput from "./ThreeInput";
import Select from "./Select";
import { selectValues, states, employment, schools } from "../Data";
import Linkedin from "./Linkedin";
import NextButton from "./NextButton";
import { Formik } from "formik";
import { validationSchema } from "../schema/schema";
import { MyContext } from "../context-api/ContextApi";
import { AllFormData } from "../context-api/FormDatas";
import { AiFillLinkedin } from "react-icons/ai";

export default function Personal() {
  const { setIndex } = useContext(MyContext);
  const { personalData, setPersonalData } = useContext(AllFormData);
  const onSubmit = (values, actions) => {
    setIndex((prev) => prev + 1);
    setPersonalData(values);
    console.log("Form Personal Submitted");
  };
  return (
    <div className="space-y-9">
      <h3 className="text-4xl font-bold text-gray-400">Personal</h3>
      <Formik
        initialValues={personalData}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="space-y-10">
              <div className="grid-2">
                <InputLabel
                  name={"firstName"}
                  type={"text"}
                  label={"legal first name"}
                  message
                />
                <InputLabel
                  name={"lastName"}
                  type={"text"}
                  label={"legal last name"}
                  message
                />
              </div>
              <div className="grid-2">
                <InputLabel
                  name={"preferredFirstName"}
                  type={"text"}
                  label={"preferred first name (Optional)"}
                />
                <ThreeInput />
              </div>
              <div className="grid-2">
                {" "}
                <Select message name="genderSelect" label={"Gender indentity"}>
                  <>
                    <option value="" hidden disabled></option>
                    {selectValues.map(({ value, text }) => {
                      return (
                        <option key={Math.random()} value={value}>
                          {text}
                        </option>
                      );
                    })}
                  </>
                </Select>
              </div>

              <div className="grid-2">
                <InputLabel
                  name={"mailingAddress1"}
                  label={"mailing address"}
                />
                <div className="grid-2">
                  <InputLabel name={"city"} label={"city"} />
                  <Select message name={"state"} label={"state"}>
                    <>
                      <option value="" hidden></option>
                      {states.map(({ value, abbrev }) => {
                        return (
                          <option key={Math.random()} value={value}>
                            {value}
                          </option>
                        );
                      })}
                    </>
                  </Select>
                </div>
              </div>
              <div className="grid-2">
                <InputLabel
                  name={"mailingAddress2"}
                  label={"mailing address 2 (Optional)"}
                />
                <div className={"w-[70%]"}>
                  <InputLabel name={"zipCode"} label={"zip code"} />
                </div>
              </div>
              <div className="grid-2">
                <InputLabel
                  message
                  name={"phoneNumber"}
                  label={"phone number"}
                />
                <InputLabel message name={"email"} label={"email"} />
              </div>
              <div className="grid-2">
                <Select
                  message
                  name={"schools"}
                  label={
                    "what is the highest degree or level of school you have completed"
                  }
                >
                  <>
                    <option value="" hidden></option>
                    {schools.map(({ value, text }) => {
                      return (
                        <option key={Math.random()} value={value}>
                          {text}
                        </option>
                      );
                    })}
                  </>
                </Select>
                <div className="translate-y-[23.4px]">
                  <Select
                    message
                    name={"employment"}
                    label={"current employment status"}
                  >
                    <>
                      <option value="" hidden></option>
                      {employment.map(({ value, text }) => {
                        return (
                          <option key={Math.random()} value={value}>
                            {text}
                          </option>
                        );
                      })}
                    </>
                  </Select>
                </div>
              </div>

              <div className="grid-2">
                <Linkedin
                  name="linkedin"
                  label="Linkedin (optional)"
                  icon={<AiFillLinkedin size={20} />}
                />
                <div className="w-[70%]">
                  <InputLabel
                    name={"referralCode"}
                    label={"Referral code (Optional)"}
                  />
                </div>
              </div>
            </div>
            <p className="text-base text-gray-400 font-semibold mt-6">
              Note: We highly encourage you to create one if you do not have one
              already.
            </p>

            <NextButton />
          </form>
        )}
      </Formik>
    </div>
  );
}
