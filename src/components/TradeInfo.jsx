import { Formik, useFormikContext } from "formik";
import React, { useContext } from "react";
import InputLabel from "./InputLabel";
import NextButton from "./NextButton";
import { AllFormData } from "../context-api/FormDatas";
import SearchOrAdd from "./SearchOrAdd";
import ListedThreeJob from "./ListedThreeJob";
import { MyContext } from "../context-api/ContextApi";
import PrevButton from "./PrevButton";
import Select from "./Select";
import TextArea from "./TextArea";
import { tradeInfoPage } from "../schema/schema";

export default function TradaeInfo() {
  const { tradeInfoData, setTradeInfoData } = useContext(AllFormData);
  const { setIndex } = useContext(MyContext);

  const onSubmit = (values) => {
    setIndex((prev) => prev + 1);
    setTradeInfoData(values);
    console.log("Form TradeInfo Submitted");
  };

  return (
    <div>
      <Formik
        initialValues={tradeInfoData}
        validationSchema={tradeInfoPage}
        onSubmit={(values, actions) => {
          if (document.activeElement.id !== "search_input") {
            onSubmit(values, actions);
          }
        }}
      >
        {({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="space-y-10">
                <InputLabel
                  message
                  name={"currentPosition"}
                  label={"What is your current position"}
                />

                <SearchOrAdd />
                <ListedThreeJob />
                <Select
                  name={"registered"}
                  width={200}
                  label={"Have you ever registered as an apprentice"}
                >
                  <option value="" hidden></option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Select>

                <div className="w-[85%] space-y-10">
                  <TextArea name={"ifWhere"} label={"If is where?"} />
                  <TextArea
                    name={"services"}
                    label={
                      "If we require special needs service, please descibe the services required here"
                    }
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
    </div>
  );
}
