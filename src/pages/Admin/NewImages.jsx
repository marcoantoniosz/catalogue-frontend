import React from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import ImagesForm from '../../components/ImagesForm';

export default function NewProduct() {
  return (
    <Dashboard>
      <ImagesForm text="Adicionar Imagens" />
    </Dashboard>
  )
}
