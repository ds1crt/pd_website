import React, { createContext, useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import MessageBox from '../components/MessageBox';

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState({ text: '', type: '', key: 0 });

  const showMessage = useCallback((text, type = 'success', duration = 3000) => {
    setMessage({ text, type, key: new Date().getTime() });
  }, []);

  return (
    <MessageContext.Provider value={{ showMessage }}>
      {children}
      <AnimatePresence>
        {message.text && (
          <MessageBox
            key={message.key}
            text={message.text}
            type={message.type}
          />
        )}
      </AnimatePresence>
    </MessageContext.Provider>
  );
};