import React, { useContext, useEffect, useCallback } from 'react';
import Header from '../../components/Header/Header';
import AppContext from '../../context/AppContext';
import ProductCard from '../../components/ProductCard/ProductCard';
import Footer from '../../components/Footer'; 
import { fetchAllProducts } from '../../services/API';
import GetAllButton from '../../components/GetAllButton/GetAllButton';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './style.css';

export default function Home() {
  
  const { products, setProducts } = useContext(AppContext);

  const fetchProducts = useCallback(async () => {
    const p = await fetchAllProducts();
    setProducts(p);
  }, [setProducts])

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <Header />
      <Container>
        <Box sx={{ mt: 15, mb: 10, display: 'flex', justifyContent: 'center' }}>
          <GetAllButton />
        </Box>
        <Box sx={{ margin: 'auto'}}>
          <Grid container justifyContent="space-evenly" alignItems="center" spacing={{ xs: 10, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {products.map((p, index) => (
              <Grid item xs={12} sm={4} md={4} key={index}>
                <ProductCard
                  id={ p.id }
                  key={ p.id }
                  title={ p.name }
                  price={ p.price }
                  thumbnail={ p.thumbnail }
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        </Container>
      <Footer />
    </>
  )
}
