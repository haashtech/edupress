import React, { createContext, useContext, useState } from 'react';

const OpenContext = createContext();

export const useOpen = () => useContext(OpenContext);

export const OpenProvider = ({ children }) => {
    const [activeNavItem, setActiveNavItem] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [opensearchbar, setOpensearchbar] = useState(null);
  const [isToggled, setIsToggled] = useState(null);

  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
    setOpenDropdown(openDropdown === index ? null : index);
  };
  
  return (
    <OpenContext.Provider value={{ handleNavItemClick, activeNavItem, setActiveNavItem, openDropdown, setOpenDropdown
        ,opensearchbar, setOpensearchbar, isToggled, setIsToggled
    }}>
      {children}
    </OpenContext.Provider>
  );
};