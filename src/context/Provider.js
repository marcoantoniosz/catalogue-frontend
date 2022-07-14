import React, { useState } from 'react';
import AppContext from './AppContext';

export default function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const contextValue = {
    products,
    setProducts,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}
