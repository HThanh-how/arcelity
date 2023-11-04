// import { createContext, useState } from "react";


// function Context({ children }: any) {
//   const [message, setMessage] = useState();

//   return (
//     <Message_data.Provider value={{ message, setMessage }}>
//       {children}
//     </Message_data.Provider>
//   );
// }


// //Đóng lại test thử


import React, { createContext, useState } from 'react';

interface MessageData {
  message: string;
  setMessage: (message: string) => void;
}

export const MessageContext = createContext<MessageData | undefined>(undefined);

const App = () => {
  const [message, setMessage] = useState('');

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {/* Other components */}
    </MessageContext.Provider>
  );
};

// export default App;
