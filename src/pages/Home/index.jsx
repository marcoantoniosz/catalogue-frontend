import React, { useContext, useEffect, useCallback } from 'react';
import AppContext from '../../context/AppContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CategoriesContainer from '../../components/CategoriesContainer';
import { fetchAllProducts } from '../../services/API';
import ProductCard from '../../components/ProductCard';
import './style.css';

export default function Home() {
  
  const { products, setProducts } = useContext(AppContext);

  const fetchProducts = useCallback(async () => {
    const products = await fetchAllProducts();
    setProducts(products);
  }, [setProducts])

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <Header />
      <main className="home-main">
        <div className="all-button">
          <button onClick={fetchProducts}>
            Exibir todos
          </button>
        </div>
        <CategoriesContainer />
        { products.message ? <h1 className="not-found">Nenhum produto encontrado</h1> : <div className="products-container">
          { products.map(p => <ProductCard
            id={ p.id }
            key={ p.id }
            title={ p.name }
            price={ p.price }
            thumbnail={ p.thumbnail }
          />) }
        </div> }
      </main>
      <Footer />
    </>
  )
}
