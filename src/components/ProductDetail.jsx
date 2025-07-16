import React from 'react';
import { useParams } from 'react-router-dom';
import "../styles/productDetail.css"
import ProductCarrossel from "./ProductCarrossel"
import ImageStars from "../assets/images/stars.svg"
import ImageSneaker from '../assets/images/sneaker.svg'
// import ImagePexels from '../assets/images/pexels-melvin-buezo-1253763-2529148.jpg' // Importação não utilizada

// NOTA: É altamente recomendado mover estes dados para um arquivo separado (ex: src/data/products.js)
// ou buscá-los de uma API para manter seus componentes limpos e focados na renderização.
const products = [
  {
    id: 1,
    marca: "Nike",
    name: "K-Swiss V8 - Masculino",
    category: "Tênis",
    price: 200,
    priceWithDiscount: 100,
    image: ImageSneaker,
    discount: "30% OFF",
    sizes: [39, 40, 41, 42, 43],
    colors: ["white", "blue", "green"],
    images: [
      '../assets/images/sneaker.svg', 
      '../assets/images/sneaker2.svg', 
      '../assets/images/sneaker3.svg', 
      '../assets/images/sneaker4.svg'
    ],
  },
  {
    id: 2,
    marca: "Nike",
    name: "K-Swiss V8 - Masculino",
    category: "Tênis",
    price: 200,
    priceWithDiscount: 100,
    image: ImageSneaker,
    discount: "30% OFF",
    sizes: [39, 40, 41, 42, 43],
    colors: ["white", "blue", "green"],
    images: [
      '../assets/images/sneaker.svg', 
      '../assets/images/sneaker2.svg', 
      '../assets/images/sneaker3.svg', 
      '../assets/images/sneaker4.svg'
    ],
  },
  {
    id: 3,
    marca: "Nike",
    name: "K-Swiss V8 - Masculino",
    category: "Tênis",
    price: 200,
    priceWithDiscount: 100,
    image: ImageSneaker,
    discount: "30% OFF",
    sizes: [39, 40, 41, 42, 43],
    colors: ["white", "blue", "green"],
    images: [
      '../assets/images/sneaker.svg', 
      '../assets/images/sneaker2.svg', 
      '../assets/images/sneaker3.svg', 
      '../assets/images/sneaker4.svg'
    ],
  },
  {
    id: 4,
    marca: "Nike",
    name: "K-Swiss V8 - Masculino",
    category: "Tênis",
    price: 200,
    priceWithDiscount: 100,
    image: ImageSneaker,
    discount: "30% OFF",
    sizes: [39, 40, 41, 42, 43],
    colors: ["white", "blue", "green"],
    images: [
      '../assets/images/sneaker.svg', 
      '../assets/images/sneaker2.svg', 
      '../assets/images/sneaker3.svg', 
      '../assets/images/sneaker4.svg'
    ],
  },
  {
    id: 5,
    marca: "Nike",
    name: "K-Swiss V8 - Masculino",
    category: "Tênis",
    price: 200,
    priceWithDiscount: 100,
    image: ImageSneaker,
    discount: "30% OFF",
    sizes: [39, 40, 41, 42, 43],
    colors: ["white", "blue", "green"],
    images: [
      '../assets/images/sneaker.svg', 
      '../assets/images/sneaker2.svg', 
      '../assets/images/sneaker3.svg', 
      '../assets/images/sneaker4.svg'
    ],
  },
  {
    id: 6,
    marca: "Nike",
    name: "K-Swiss V8 - Masculino",
    category: "Tênis",
    price: 200,
    priceWithDiscount: 100,
    image: ImageSneaker,
    discount: "30% OFF",
    sizes: [39, 40, 41, 42, 43],
    colors: ["white", "blue", "green"],
    images: [
      '../assets/images/sneaker.svg', 
      '../assets/images/sneaker2.svg', 
      '../assets/images/sneaker3.svg', 
      '../assets/images/sneaker4.svg'
    ],
  },
  {
    id: 7,
    marca: "Nike",
    name: "K-Swiss V8 - Masculino",
    category: "Tênis",
    price: 200,
    priceWithDiscount: 100,
    image: ImageSneaker,
    discount: "30% OFF",
    sizes: [39, 40, 41, 42, 43],
    colors: ["white", "blue", "green"],
    images: [
      '../assets/images/sneaker.svg', 
      '../assets/images/sneaker2.svg', 
      '../assets/images/sneaker3.svg', 
      '../assets/images/sneaker4.svg'
    ],
  },
  {
    id: 8,
    reference: "38416711",
    marca: "Olympikus", // Corrigido 'mark' para 'marca' para consistência
    name: "Olympikus Corre 4 Unissex",
    category: "Tênis",
    description: "Tênis Olympikus Corre 4 Unissex é ideal para quem busca conforto e estilo no dia a dia. Com design moderno e materiais de alta qualidade, este tênis proporciona leveza e respirabilidade, perfeito para caminhadas ou corridas leves.",
    discount: "20% OFF",
    price: 549,
    priceWithDiscount: 449,
    sizes: [39, 40, 41, 42, 43],
    colors: ["white", "gray", "yellow"],
    images: [
      '../assets/images/sneaker.svg', 
      '../assets/images/sneaker2.svg', 
      '../assets/images/sneaker3.svg', 
      '../assets/images/sneaker4.svg'
    ],
  },
];


const ProductDetail = () => {
    // Pega o 'id' da URL, ex: /products/8
    const { id } = useParams();

    // Encontra o produto no array. Note o uso de `==` para comparação frouxa,
    // já que o `id` de useParams é uma string e `product.id` é um número.
    // Uma solução mais robusta seria `p.id.toString() === id`.
    const product = products.find(p => p.id == id);

    // Lida com o caso em que o produto não é encontrado
    if (!product) {
        // Em um app real, você poderia redirecionar para uma página 404
        return <div>Produto não encontrado!</div>;
    }

    const priceWithDiscount = product.priceWithDiscount.toFixed(2).replace('.', ',');

    return (
        <>
            <div className="product-detail-container">
                <div className="path-text">
                    <p>Home / Produtos / {product.name}</p>
                </div>
                <div className="product-description-container">
                    <div className="carousel-container">
                        <ProductCarrossel images={product.images} />
                    </div>
                    <div className="detail-text-container">
                        <h1 className="detail-title">{product.name}</h1>
                        <p className="detail-subtitle">Casual | {product.marca} | Ref: {product.reference}</p>
                        <p className="detail-reviews"><img src={ ImageStars } alt="Classificação por estrelas" /> (90 avaliações)</p>
                        <div className="detail-prices-container">
                          <div id="price-fragmented">
                            <p className="price-without-discount">R$
                              <p className="price-with-discount-bills">{ priceWithDiscount.substring(0, priceWithDiscount.length - 3) }</p>
                              <p className='price-with-discount-cents'> { priceWithDiscount.substring(priceWithDiscount.length - 3) }</p>
                            </p>
                          </div>  
                          <p className="price">R$ { product.price.toFixed(2).replace('.', ',') }</p>
                        </div>
                        <p className="detail-description-title">Descrição do produto</p>
                        <p className="detail-description-text">{product.description || "Descrição não disponível."}</p>
                        <p className="detail-legend-title">Tamanho</p>
                        <div className="detail-legend-size-buttons">
                            {product.sizes.map((size) => <button className="size-button" key={size}>{size}</button>)}
                        </div>
                        <p className="detail-colors-title">Cores</p>
                        <div className="detail-legend-colors-options">
                            {product.colors.map((color) => (
                                <div key={color} className="color-option" style={{ backgroundColor: color }}> </div>
                            ))}
                        </div>
                        <button className="buy-button">COMPRAR</button>
                    </div>
                </div>
            </div>
            <div id="related-products">

            </div>
        </>
        
    )
}

export default ProductDetail;
