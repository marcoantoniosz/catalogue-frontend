import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import AditionalImages from '../../components/AditionalImages';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../services/API';
import './style.css';
import { fetchImagesByProductId } from '../../services/API';
const { useNavigate } = require('react-router-dom');


export default function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [images, setImages] = useState([]);

  const fetchProduct = async () => {
    const product = await fetchProductById(id);
    setProduct(product[0]);
  };

  const fetchImages = async () => {
    const images = await fetchImagesByProductId(id);
    setImages(images[0].imgs);
  };

  const backToHome = () => {
    navigate('/');
  };

  useEffect(() => {
    fetchProduct();
    fetchImages();
  }, []);

  return (
    <main className="product-detail-main">
      <ProductCard
        id={ product.id }
        key={ product.id }
        title={ product.name }
        price={ product.price }
        thumbnail={ product.thumbnail }
      />
      <div className="images-container">
        { images.map((image, index) => <AditionalImages key={ index } src={ image.img } />) }
      </div>
      <div className="back-button">
        <button onClick={ backToHome }>
          Voltar
        </button>
      </div>
    </main>
  )
}
