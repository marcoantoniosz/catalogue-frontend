import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { fetchProductsByCategoryId } from '../../services/API';

export default function CategoriesLink(props) {

  const { setProducts } = useContext(AppContext);

  const { category, id, close } = props;

  const filterProducts = async () => {
    const filteredProducts = await fetchProductsByCategoryId(id);
    setProducts(filteredProducts);
    close();
  };

  return (
    <li>
        <button onClick={ filterProducts }>
          {category}
        </button>
    </li>
  )
}
