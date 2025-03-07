import React, { createContext, useContext, useState } from 'react';

// Create a context for Rooms
const RoomContext = createContext();

// Custom hook to use the RoomContext
export const useRooms = () => {
  return useContext(RoomContext);
};

// RoomProvider component
export const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]); // State to hold the list of rooms

  // Function to add a new room
  const addRoom = (name, amount) => {
    const newRoom = {
      id: rooms.length + 1, // Generate a simple ID
      name: name,
      amount: amount,
    };
    setRooms((prevRooms) => [...prevRooms, newRoom]); // Update the state with the new room
  };

  return (
    <RoomContext.Provider value={{ rooms, addRoom }}>
      {children}
    </RoomContext.Provider>
  );
};
