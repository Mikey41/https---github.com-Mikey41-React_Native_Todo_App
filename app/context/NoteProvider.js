//import liraries
import React, { Component, createContext, useEffect, useState, useContext } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const NoteContext = createContext()
const NoteProvider = ({children}) => {
  const [notes, setNotes] = useState([])
  
  const findNotes = async () => {
    const result = await AsyncStorage.getItem('notes')
    if(result !== null) setNotes(JSON.parse(result))
  }
  
  useEffect (() => {
    findNotes();
  }, [])
  

  return (
    <NoteContext.Provider value={{notes, setNotes,findNotes}}>
      {children}
    </NoteContext.Provider>
  );
};

// define your styles


//make this component available to the app
export const useNotes = () => useContext (NoteContext)
export default NoteProvider;
