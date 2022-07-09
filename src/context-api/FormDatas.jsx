import React, { useState } from "react";

export const AllFormData = React.createContext(null);

export const defaultJobSchema = {
  position: "",
  company: "",
  hourlyRate: "",
  timeAtCompany: "",
};

function FormDatas({ children }) {
  const [personalData, setPersonalData] = useState({
    firstName: "",
    lastName: "",
    preferredFirstName: "",
    mailingAddress1: "",
    mailingAddress2: "",
    zipCode: "",
    phoneNumber: "",
    email: "",
    linkedin: "",
    city: "",
    referralCode: "",
    DD: "",
    MM: "",
    YY: "",
    genderSelect: "",
    state: "",
    schools: "",
    employment: "",
  });
  const [tradeInfoData, setTradeInfoData] = useState({
    currentPosition: "",
    search: [],
    jobData: [
      {
        id: 1,
        ...defaultJobSchema,
      },
    ],
    ifWhere: "",
    services: "",
  });
  const [gosProutData, setGosProutData] = useState({
    expertise: "",
    achieve: "",
    currentRole: "",
    disciplines: "",
    professional: "",
    softSkills: "",
    hardSkills: "",
  });

  return (
    <AllFormData.Provider
      value={{
        personalData,
        setPersonalData,
        tradeInfoData,
        setTradeInfoData,
        gosProutData,
        setGosProutData,
      }}
    >
      {children}
    </AllFormData.Provider>
  );
}

export default FormDatas;
