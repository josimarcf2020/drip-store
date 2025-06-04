import "../styles/productDetail.css"
import ProductCarrossel from "./ProductCarrossel"
import ImageStars from "../assets/images/stars.svg"
import ImageSneaker from '../assets/images/sneaker.svg'


const products = [
  {
    id: 1,
    marca: "Nike",
    name: "K-Swiss V8 - Masculino",
    category: "Tênis",
    price: 200,
    priceWithDiscount: 100,
    image: { ImageSneaker },
    discount: "30% OFF",
    sizes: [39, 40, 41, 42, 43],
    colors: ["white", "blue", "green"],
  },
  {
    id: 2,
    marca: "Nike",
    name: "K-Swiss V8 - Masculino",
    category: "Tênis",
    price: 200,
    priceWithDiscount: 100,
    image: { ImageSneaker },
    discount: "30% OFF",
    sizes: [39, 40, 41, 42, 43],
    colors: ["white", "blue", "green"],
  },
  {
    id: 3,
    marca: "Nike",
    name: "K-Swiss V8 - Masculino",
    category: "Tênis",
    price: 200,
    priceWithDiscount: 100,
    image: { ImageSneaker },
    sizes: [39, 40, 41, 42, 43],
    colors: ["white", "blue", "green"],
  },
  {
    id: 4,
    marca: "Nike",
    name: "K-Swiss V8 - Masculino",
    category: "Tênis",
    price: 200,
    priceWithDiscount: 100,
    image: { ImageSneaker },
    sizes: [39, 40, 41, 42, 43],
    colors: ["white", "blue", "green"],
  },
  {
    id: 5,
    marca: "Nike",
    name: "K-Swiss V8 - Masculino",
    category: "Tênis",
    price: 200,
    priceWithDiscount: 100,
    image: { ImageSneaker },
    sizes: [39, 40, 41, 42, 43],
    colors: ["white", "blue", "green"],
  },
  {
    id: 6,
    marca: "Nike",
    name: "K-Swiss V8 - Masculino",
    category: "Tênis",
    price: 200,
    priceWithDiscount: 100,
    image: { ImageSneaker },
    sizes: [39, 40, 41, 42, 43],
    colors: ["white", "blue", "green"],
  },
  {
    id: 7,
    marca: "Nike",
    name: "K-Swiss V8 - Masculino",
    category: "Tênis",
    price: 200,
    priceWithDiscount: 100,
    image: { ImageSneaker },
    sizes: [39, 40, 41, 42, 43],
    colors: ["white", "blue", "green"],
  },
  {
    id: 8,
    marca: "Nike",
    name: "K-Swiss V8 - Masculino",
    category: "Tênis",
    price: 200,
    priceWithDiscount: 100,
    image: { ImageSneaker },
    sizes: [39, 40, 41, 42, 43],
    colors: ["white", "blue", "green"],
  },
];


const ProdusctDetail = ( id ) => {
    return (
        <>
            <div id="product-detail-container">
                <div id="path-text">
                    <p>Home/</p>
                </div>
                <div id="product-description-container">
                    <div id="carousel-container">
                        <ProductCarrossel />
                    </div>
                    <div id="detail-text-container">
                        <p id="detail-title">{ products[1].category} {products[1].marca} {products[1].name} </p>
                        <p id="detail">Casual | Nike | Ref: 38416711</p>
                        <p id="detail-reviews"><img src={ ImageStars } alt="Classificação por estrelas" /> (avaliações)</p>
                        <div id="detail-prices-container">
                            <p id="price-with-discount">{ products[1].priceWithDiscount }</p>
                            <p id="price">{ products[1].price }</p>
                        </div>
                        <p id="detail-description-title">Descrição do produto</p>
                        <p id="detail-description-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis eius ratione, quis, accusamus, repellat dolores maxime fugiat earum saepe vero nulla quia cum expedita nam non. Maxime doloremque modi unde!</p>
                        <p id="detail-legend-title">Tamanho</p>
                        <div id="detail-legend-size-buttons">
                            {products[1].sizes.map((size) => <button key={size}>{size}</button>)}
                        </div>
                        <p id="detail-colors-title">Cores</p>
                        <div id="detail-legend-colors-options">
                            {products[1].colors.map((color) => (
                                <div key={color} id="cor" style={{ backgroundColor: color }}> </div>
                            ))}
                        </div>
                        <button>COMPRAR</button>
                    </div>
                </div>
            </div>
            <div id="related-products">

            </div>
        </>
        
    )
}

export default ProdusctDetail;

