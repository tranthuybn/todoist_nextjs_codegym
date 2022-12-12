import { createContext, useContext, useState } from 'react';

export const GeneralContext = createContext();
export const GeneralProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  return <GeneralContext.Provider value={{ show, setShow }}>{children}</GeneralContext.Provider>;
};
export const useGeneralContextValue = () => useContext(GeneralContext);
