import React, { useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { fetchAllProducts } from '../../services/API';
import ProductCard from '../../components/ProductCard';
import './style.css';

export default function Home() {
  
  const { products, setProducts } = useContext(AppContext);

  const fetchProducts = async () => {
    const products = await fetchAllProducts();
    setProducts(products);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <main className="home-main">
        <div className="all-button">
          <button onClick={fetchProducts}>
            Exibir todos
          </button>
        </div>
        { products.message ? <h1>Nenhum produto encontrado</h1> : <div className="products-container">
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
