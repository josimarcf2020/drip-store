import React from "react";
import ImageSneaker from '../assets/images/sneaker.svg'
import '../styles/ProductListing.css'

// Lista mockada de produtos
const products = [
  {
    id: 1,
    name: "K-Swiss V8 - Masculino",
    category: "Tênis",
    price: 200,
    priceWithDiscount: 100,
    image: { ImageSneaker },
    discount: "30% OFF",
  },
  {
    id: 2,
    name: "K-Swiss V8 - Masculino",
    category: "Tênis",
    price: 200,
    priceWithDiscount: 100,
    image: { ImageSneaker },
    discount: "30% OFF",
  },
  {
    id: 3,
    name: "K-Swiss V8 - Masculino",
    category: "Tênis",
    price: 200,
    priceWithDiscount: 100,
    image: { ImageSneaker },
  },
  {
    id: 4,
    name: "K-Swiss V8 - Masculino",
    category: "Tênis",
    price: 200,
    priceWithDiscount: 100,
    image: { ImageSneaker },
  },
  {
    id: 5,
    name: "K-Swiss V8 - Masculino",
    category: "Tênis",
    price: 200,
    priceWithDiscount: 100,
    image: { ImageSneaker },
  },
  {
    id: 6,
    name: "K-Swiss V8 - Masculino",
    category: "Tênis",
    price: 200,
    priceWithDiscount: 100,
    image: { ImageSneaker },
  },
  {
    id: 7,
    name: "K-Swiss V8 - Masculino",
    category: "Tênis",
    price: 200,
    priceWithDiscount: 100,
    image: { ImageSneaker },
  },
  {
    id: 8,
    name: "K-Swiss V8 - Masculino",
    category: "Tênis",
    price: 200,
    priceWithDiscount: 100,
    image: { ImageSneaker },
  },
];

const ProductListing = () => {
  return (
    <div id="product_listing">
      <p id="product_title">Produtos em alta</p>
      <div id= "product_container" className="row row-cols-1 row-cols-md-4 g-4">
        {products.map((product) => (
          <div className="col">
            <div className="card">
              <div id="container_discount">
                {product.discount && ( 
                  <span id="product_discount">{product.discount}</span>
                )}
              </div>
              <div id="container_image">
                <img src={ImageSneaker} id="product_image" alt="Imagem do produto" width={220} height={220} />
              </div>
              <div className="card-body">
                <p id="product_category">{product.category}</p>
                <p id="product_name">{product.name}</p>
                <div id="prices">
                  <p id="product_price">${product.price}</p>
                  <p id="product_price_with_discount">${product.priceWithDiscount}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { ProductListing };