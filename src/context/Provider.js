import React, { useState } from 'react';
import AppContext from './AppContext';
import { fetchAllCategories } from '../services/API';

export default function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const response = await fetchAllCategories();
    setCategories(response);
  }


  const contextValue = {
    products,
    setProducts,
    categories,
    setCategories,
    fetchCategories
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}
