import React, { createContext, useContext, useState } from 'react';

// Create a Context
const TransactionContext = createContext();

// Create a Provider component
export const TransactionProvider = ({ children }) => {
  const [transactionHistory, setTransactionHistory] = useState([]);

  const addTransaction = (contactName, amount) => {
    setTransactionHistory(prevHistory => [
      { contactName, amount },
      ...prevHistory,
    ]);
  };

  return (
    <TransactionContext.Provider value={{ transactionHistory, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

// Custom hook to use the Transaction Context
export const useTransaction = () => {
  return useContext(TransactionContext);
};
