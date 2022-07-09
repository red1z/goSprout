import { useFormikContext } from "formik";
import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import { defaultJobSchema } from "../context-api/FormDatas";
import Job from "./Job";

export default function ListedThreeJob() {
  const { setFieldValue, values } = useFormikContext();
  const addJobHandler = () => {
    setFieldValue("jobData", [
      ...values.jobData,
      { id: values.jobData.length + 1, ...defaultJobSchema },
    ]);
  };
  return (
    <div className="space-y-5">
      <h4 className="text-xl text-gray-400 font-medium">
        List your last three job
      </h4>

      <div className="space-y-8">
        <Job />
        <div className="!mb-7">
          <button
            onClick={addJobHandler}
            type="button"
            className="flex gap-6 text-xl rounded-full items-center border-slate-400 border bg-slate-500/20 text-slate-700 px-10 py-2 hover:bg-slate-500 hover:text-white duration-150"
          >
            Add Antother Job <HiPlus />
          </button>
        </div>
      </div>
    </div>
  );
}
