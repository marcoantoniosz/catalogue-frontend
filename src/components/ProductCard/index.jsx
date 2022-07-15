import React from 'react';
import './style.css';
import { useNavigate } from "react-router-dom";

export default function ProductCard(props) {
  const navigate = useNavigate();
  const { title, price, thumbnail, id } = props;

  const handleClick = () => {
    navigate(`/product/${id}`);
  }

  return (
    <div onClick={ handleClick } className="product" id={ id }>
      <h1>{ title }</h1>
      <div className="thumb-container">
        <img src={ thumbnail } alt={ title } />
      </div>
      <p>R${ price }</p>
    </div>
  )
}
