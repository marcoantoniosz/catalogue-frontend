import React, { useState, useEffect, useCallback } from 'react';
import ProductCard from '../../components/ProductCard';
import AditionalImages from '../../components/AditionalImages';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../services/API';
import './style.css';
import Return from '../../icons/return.svg';
import { fetchImagesByProductId } from '../../services/API';
const { useNavigate } = require('react-router-dom');


export default function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [images, setImages] = useState([]);

  const fetchProduct = useCallback(async () => {
    const product = await fetchProductById(id);
    setProduct(product[0]);
  }, [setProduct, id]);

  const fetchImages = useCallback(async () => {
    const images = await fetchImagesByProductId(id);
    setImages(images[0].imgs);
  }, [setImages, id]);

  const backToHome = () => {
    navigate('/');
  };

  useEffect(() => {
    fetchProduct();
    fetchImages();
  }, [fetchProduct, fetchImages]);

  return (
    <main className="product-detail-main">
      <ProductCard
        id={ product.id }
        key={ product.id }
        title={ product.name }
        price={ product.price }
        thumbnail={ product.thumbnail }
      />
      <div className="back-button">
        <button onClick={ backToHome }>
          <img src={ Return } alt="return-icon" />
        </button>
      </div>
    </main>
  )
}
