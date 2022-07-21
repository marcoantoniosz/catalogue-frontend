import React from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import CategoryForm from '../../components/CategoryForm';

export default function NewCategory() {
  return (
    <Dashboard>
      <CategoryForm text="Nova Categoria" />
    </Dashboard>
  )
}