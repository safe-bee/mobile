import React, { createContext, useContext, useState } from 'react';

const RealizarTareaContext = createContext();

export const useRealizarTareaContext = () => useContext(RealizarTareaContext);

export function RealizarTareaProvider({ children }) {
  const [selectedApiario, setSelectedApiario] = useState(null);
  const [selectedColmena, setSelectedColmena] = useState(null);
  const [selectedTarea, setSelectedTarea] = useState('');

  return (
    <RealizarTareaContext.Provider
      value={{ 
        selectedApiario, 
        setSelectedApiario,
        selectedColmena, 
        setSelectedColmena,
        selectedTarea, 
        setSelectedTarea,
      }}>
      {children}
    </RealizarTareaContext.Provider>
  );
}
