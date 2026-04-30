import { createContext, useState } from "react";

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [user] = useState("Red eye");

  return (
    <CarContext.Provider value={{ user }}>
      {children}
    </CarContext.Provider>
  );
};