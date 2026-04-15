"use client";

import { createContext, useState } from "react";

export const TimeLine = createContext();
const TimelineContext = ({ children }) => {
  const [contact, setContact] = useState([]);

  return (
    <TimeLine.Provider value={{ contact, setContact }}>
      {children}
    </TimeLine.Provider>
  );
};

export default TimelineContext;
