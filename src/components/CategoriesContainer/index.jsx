import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { fetchProductsByCategoryId } from '../../services/API';
import burguer from '../../icons/burger.png';
import pizza from '../../icons/pizza.png';
import drink from '../../icons/drink.png';
import './style.css';

export default function CategoriesContainer() {
  const { setProducts } = useContext(AppContext);

  const filterProducts = async ({ target }) => {
    const { id } = target;
    const filteredProducts = await fetchProductsByCategoryId(id);
    setProducts(filteredProducts);
  };

  return (
    <aside className="categories-aside">
      <div className="box-title">
        Exibir por categoria
      </div>
      <section className="categories-container">
        <div onClick={filterProducts} id="000001" className="category-card">
          <img id="000001" src={burguer} alt="burguer" />
        </div>
        <div onClick={filterProducts} id="000002" className="category-card">
          <img id="000002" src={pizza} alt="pizza" />
        </div>
        <div onClick={filterProducts} id="000003" className="category-card">
          <img id="000003" src={drink} alt="drink" />
        </div>
      </section>
    </aside>
  )
}
