import React from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import ProductForm from '../../components/ProductForm';

export default function NewProduct() {
  return (
    <Dashboard>
      <ProductForm text="Novo Produto" />
    </Dashboard>
  )
}
