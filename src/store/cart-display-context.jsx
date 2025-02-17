import React, {  useContext, useState, useMemo } from 'react';

export const Display = React.createContext();

// eslint-disable-next-line react/prop-types
export const CartDisplay = ({ children }) => {
  const [cartDisplay, setCartDisplay] = useState(false);

  const toggleCartVisibility = (show) => {
    setCartDisplay(show);
  };

// Memoizing the context value to optimize re-renders
  const contextValue = useMemo(() => ({
    cartDisplay,
    toggleCartVisibility
  }), [cartDisplay]);

  return <Display.Provider value={contextValue}>{children}</Display.Provider>;
};


const useCartDisplay = () => useContext(Display);

export default useCartDisplay;
