import React, { useState, useEffect, useCallback } from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { fetchAllCategories } from '../../services/API';
import Table from '../../components/CategoryTable';

export default function EditProduct() {

  const [products, setProducts] = useState([]);

  const fetchProducts = useCallback(
    async () => {
      const response = await fetchAllCategories();
      setProducts(response);
    }
  );

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Dashboard>
      <Container sx={{ fontSize: "2rem" }} component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            paddingTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Editar Categoria
          </Typography>
          <Table rows={products} />
        </Box>
      </Container>
    </Dashboard>
  )
}