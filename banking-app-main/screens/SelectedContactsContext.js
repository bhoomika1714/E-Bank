// SelectedContactsContext.js
import React, { createContext, useContext, useState } from 'react';

// Create Context
const SelectedContactsContext = createContext();

// Provider Component
export const SelectedContactsProvider = ({ children }) => {
  const [selectedContacts, setSelectedContacts] = useState([]);

  const updateSelectedContacts = (contacts) => {
    setSelectedContacts(contacts);
  };

  return (
    <SelectedContactsContext.Provider value={{ selectedContacts, updateSelectedContacts }}>
      {children}
    </SelectedContactsContext.Provider>
  );
};

// Custom hook to use Selected Contacts Context
export const useSelectedContacts = () => useContext(SelectedContactsContext);
