import { createContext, useState } from 'react';

export const JsonContext = createContext({});

export const JsonProvider = ({ children }) => {
  const [json, setJson] = useState(undefined);
  return (
    <JsonContext.Provider value={{ json, setJson }}>
      {children}
    </JsonContext.Provider>
  );
};
