import { useFormikContext } from "formik";
import React, { useContext, useEffect } from "react";
import { MdBathroom } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";
import { defaultJobSchema } from "../context-api/FormDatas";
import JobInput from "./JobInput";

function Job() {
  const { values, setFieldValue } = useFormikContext();

  const removeJobHandler = (id) => {
    const filteredJobs = values.jobData.filter((job) => job.id !== id);
    if (filteredJobs.length <= 0) {
      setFieldValue("jobData", [
        { id: filteredJobs.length + 1, ...defaultJobSchema },
      ]);
    } else {
      setFieldValue("jobData", filteredJobs);
    }
  };

  const onChangeHandler = (id, name, value) => {
    const updatedJobs = values.jobData.map((job) => {
      if (job.id === id) {
        return {
          ...job,
          [name]: value,
        };
      } else {
        return job;
      }
    });
    setFieldValue("jobData", updatedJobs);
  };

  return (
    <>
      {values.jobData.map((job, i) => {
        return (
          <div
            key={i}
            className="grid grid-cols-[auto,100px] border-b border-slate-300 pb-9"
          >
            <div className="space-y-6">
              <div className="grid-2">
                <JobInput
                  onChange={(e) =>
                    onChangeHandler(job.id, "company", e.target.value)
                  }
                  value={job.company}
                  label={"Compnay Name"}
                />
                <div className="w-[50%]">
                  <JobInput
                    onChange={(e) =>
                      onChangeHandler(job.id, "hourlyRate", e.target.value)
                    }
                    value={job.hourlyRate}
                    label={"Hourly Rate"}
                  />
                </div>
              </div>
              <div className="grid-2">
                <JobInput
                  onChange={(e) =>
                    onChangeHandler(job.id, "position", e.target.value)
                  }
                  value={job.position}
                  label={"Position"}
                />
                <div className="w-[60%]">
                  <JobInput
                    onChange={(e) =>
                      onChangeHandler(job.id, "timeAtCompany", e.target.value)
                    }
                    value={job.timeAtCompany}
                    label={"Time at company"}
                  />
                </div>
              </div>
            </div>
            <div>
              <span
                onClick={() => removeJobHandler(job.id)}
                className="text-slate-500 cursor-pointer"
              >
                <VscChromeClose
                  size={20}
                  className="border h-6 w-6 rounded-full p-1 scale-110 border-slate-500"
                />
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Job;
