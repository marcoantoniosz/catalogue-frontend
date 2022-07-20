import React from 'react';
import { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';
import { fetchProductsByQuery } from '../../services/API';
import './style.css'

export default function SearchBar() {
    const { setProducts } = useContext(AppContext);
    const [search, setSearch] = useState('');
    const [button, setButton] = useState(true);


    const handleChange = ( { target } ) => {
        const { value } = target;
        setSearch(value);
        if (value.length > 0) {
            return setButton(false);
       }
       setButton(true);
    };

    const handleClick = async (e) => {
      e.preventDefault();
      const query = await fetchProductsByQuery(search);
      setProducts(query);
    };

  return (
    <div className="header-form">
      <form>
        <input type="text" placeholder="&#xf002;" value={search} onChange={handleChange} />
        <button className="d-none" disabled={ button } type="submit" onClick={handleClick}>Search</button>
      </form>
    </div>
  )
}
