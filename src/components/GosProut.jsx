import { Formik } from "formik";
import React, { useContext } from "react";
import { MyContext } from "../context-api/ContextApi";
import { AllFormData } from "../context-api/FormDatas";
import { gosProutPage } from "../schema/schema";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import TextArea from "./TextArea";

export default function GosProut() {
  const { setIndex } = useContext(MyContext);
  const { gosProutData, setGosProutData } = useContext(AllFormData);

  const onSubmit = (values) => {
    console.log("Form GosProut Submitted");
    setGosProutData(values);
    setIndex((prev) => prev + 1);
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={gosProutData}
      validationSchema={gosProutPage}
    >
      {({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div className="space-y-9">
              <h3 className="text-4xl font-bold text-gray-400">GoSprout</h3>

              <TextArea
                name="expertise"
                label={
                  "What would you like to learn more about in your field of expertise?"
                }
              />

              <TextArea
                name={"achieve"}
                label={
                  "What are your future career goals and what do you plan to do to achieve them?"
                }
              />
              <TextArea
                name={"currentRole"}
                label={
                  "What skills or knowledge would make you better at your current role?"
                }
              />
              <TextArea
                name={"disciplines"}
                label={
                  "Do you prefer becoming an expert in your field or broadening your knowledge  of different disciplines? Why?"
                }
              />
              <TextArea
                name={"professional"}
                label={"What do you do to achieve your professional goals?"}
              />

              <div className="grid grid-cols-2 w-[85%] gap-10">
                <TextArea
                  name={"softSkills"}
                  height={200}
                  label={"Lists Soft Skills"}
                />
                <TextArea
                  name={"hardSkills"}
                  height={200}
                  label={"Lists Hard Skills"}
                />
              </div>
              <div className="flex items-center justify-between">
                <PrevButton />
                <NextButton />
              </div>
            </div>
          </form>
        );
      }}
    </Formik>
  );
}
