import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { fetchProductsByCategoryId } from '../../services/API';
import burguer from '../../icons/burguer.svg';
import pizza from '../../icons/pizza.svg';
import drink from '../../icons/drink.svg';
import './style.css';

export default function CategoriesContainer() {
  const { setProducts } = useContext(AppContext);

  const filterProducts = async ({ target }) => {
    const { id } = target;
    const filteredProducts = await fetchProductsByCategoryId(id);
    setProducts(filteredProducts);
  };

  return (
    <section className="categories-container">
      <div onClick={filterProducts} id="000001" className="category-card">
        <p id="000001">Sanduíches</p>
        <img id="000001" src={burguer} alt="burguer" />
      </div>
      <div onClick={filterProducts} id="000002" className="category-card">
        <p id="000002">Pizzas</p>
        <img id="000002" src={pizza} alt="pizza" />
      </div>
      <div onClick={filterProducts} id="000003" className="category-card">
        <p id="000003">Bebidas</p>
        <img id="000003" src={drink} alt="drink" />
      </div>
    </section>
  )
}
