import React, { useContext, useCallback } from 'react';
import { fetchAllProducts } from '../../services/API';
import AppContext from '../../context/AppContext';
import Button from '@mui/material/Button';

export default function GetAllButton() {

  const { setProducts } = useContext(AppContext);

  const fetchProducts = useCallback(async () => {
    const p = await fetchAllProducts();
    setProducts(p);
  }, [setProducts])

  return (
    <Button onClick={fetchProducts} variant="contained">Exibir</Button>
  )
}
