import React from 'react';
import './style.css';

export default function AditionalImages(props) {
    const { src, alt } = props;
  return (
      <img className="aditional-image" src={ src } alt={ alt } />
  )
}
