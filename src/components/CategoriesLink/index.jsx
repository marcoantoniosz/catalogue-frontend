import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { fetchProductsByCategoryId } from '../../services/API';

export default function CategoriesLink(props) {

  const { setProducts } = useContext(AppContext);

  const { icon, alt, id, close, title } = props;

  const filterProducts = async () => {
    const filteredProducts = await fetchProductsByCategoryId(id);
    setProducts(filteredProducts);
    close();
  };

  return (
    <li>
        <button onClick={ filterProducts }>
          { title }
          <img src={ icon } alt={ alt } />
        </button>
    </li>
  )
}
