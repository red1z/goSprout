import React, { useContext, useState } from "react";

export const MyContext = React.createContext(null);

export default function ContextApi({ children }) {
  const [maxIndex, setMaxIndex] = useState(0);
  const [index, setIndex] = useState(0);

  return (
    <MyContext.Provider
      value={{
        index,
        setIndex,
        maxIndex,
        setMaxIndex,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export const useMyContext = () => {
  return useContext(MyContext);
};
