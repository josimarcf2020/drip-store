import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/productDetail.css";
import ProductCarrossel from "./ProductCarrossel";
import ImageStars from "../assets/images/stars.svg";

/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} marca
 * @property {string} name
 * @property {string} category
 * @property {number} price
 * @property {number} priceWithDiscount
 * @property {string} image
 * @property {string} discount
 * @property {number[]} sizes
 * @property {string[]} colors
 * @property {string[]} images
 * @property {string} [description]
 * @property {string} [reference]
 */

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        // Corrigido para http, que é mais comum para localhost.
        const response = await fetch(`http://localhost:3000/v1/product/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        // Tratamento de erro mais específico
        if (!response.ok) {
          const errorText = response.status === 404 ? 'Produto não encontrado' : 'Erro ao buscar o produto';
          throw new Error(errorText);
        }

        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError('Não foi possível carregar o produto. Tente novamente mais tarde.');
        console.error('Erro ao buscar produto:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error || !product) {
    return <div>{error || 'Produto não encontrado!'}</div>;
  }

  const priceWithDiscount = product.priceWithDiscount.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const price = product.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <div className="product-detail-container">
      <div className="path-text">
        <p>Home / Produtos / {product.category} / {product.name}</p>
      </div>
      <div className="product-description-container">
        <div className="carousel-container">
          <ProductCarrossel images={product.images} />
        </div>
        <div className="detail-text-container">
          <h1 className="detail-title">{product.name}</h1>
          <p className="detail-subtitle">
            Casual | {product.marca} | Ref: {product.reference || 'N/A'}
          </p>
          <p className="detail-reviews">
            <img src={ImageStars} alt="Classificação por estrelas" /> (90 avaliações)
          </p>
          <div className="detail-prices-container">
            <p className="price-with-discount">{priceWithDiscount}</p>
            <p className="price">{price}</p>
          </div>
          <p className="detail-description-title">Descrição do produto</p>
          <p className="detail-description-text">
            {product.description || "Descrição não disponível."}
          </p>
          <p className="detail-legend-title">Tamanho</p>
          <div className="detail-legend-size-buttons">
            {product.sizes.map((size) => (
              <button className="size-button" key={size}>
                {size}
              </button>
            ))}
          </div>
          <p className="detail-colors-title">Cores</p>
          <div className="detail-legend-colors-options">
            {product.colors.map((color) => (
              <div
                key={color}
                className="color-option"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <button className="buy-button">COMPRAR</button>
        </div>
      </div>
      <div id="related-products">
        {/* TODO: Implementar lógica para exibir produtos relacionados */}
      </div>
    </div>
  );
};

export default ProductDetail;