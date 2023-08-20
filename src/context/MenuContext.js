import React, { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

export const useMenuContext = () => useContext(MenuContext);

export function MenuProvider({ children }) {
  const [selectedIcon, setSelectedIcon] = useState('home');

  const selectIcon = (iconName) => {
    setSelectedIcon(iconName);
  };

  return (
    <MenuContext.Provider value={{ selectedIcon, selectIcon }}>
      {children}
    </MenuContext.Provider>
  );
}
