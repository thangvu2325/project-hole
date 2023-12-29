import React, { ReactNode, createContext, useContext, useState } from "react";

const AppContext = createContext({});

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState({
    projectDate: "",
    pileNo: "",
    boringStartDate: "",
    boringStartTime: "",
    boringEndDate: "",
    boringEndTime: "",
    groutingStartDate: "",
    groutingStartTime: "",
    groutingEndDate: "",
    groutingEndTime: "",
    platformLevel: "",
    topOfCasing: "",
    cutOffLevel: "",
    toc: "",
    toe: "",
    ogl: "",
    pileLength: "",
    soilDrilling: "",
    totalWeathered: "",
    rockSocket: "",
    groutLength: "",
    ofBag: "",
    api: "",
    permanent: "",
  });

  const updateFormData = (
    newData: React.SetStateAction<{
      projectDate?: string;
      pileNo?: string;
      boringStartDate?: string;
      boringStartTime?: string;
      boringEndDate?: string;
      boringEndTime?: string;
      groutingStartDate?: string;
      groutingStartTime?: string;
      groutingEndDate?: string;
      groutingEndTime?: string;
      platformLevel?: string;
      topOfCasing?: string;
      cutOffLevel?: string;
      toc?: string;
      toe?: string;
      ogl?: string;
      pileLength?: string;
      soilDrilling?: string;
      totalWeathered?: string;
      rockSocket?: string;
      groutLength?: string;
      ofBag?: string;
      api?: string;
      permanent?: string;
    }>
  ) => {
    setData({ ...data, ...newData });
  };

  return (
    <AppContext.Provider value={{ data, updateFormData }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

// eslint-disable-next-line react-refresh/only-export-components
export { AppProvider, useAppContext };
