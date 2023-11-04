import { createContext, useState } from "react";

e;

function Context({ children }: any) {
  const [message, setMessage] = useState();

  return (
    <Message_data.Provider value={{ message, setMessage }}>
      {children}
    </Message_data.Provider>
  );
}
