import "../styles/ProductCard.css";

/*
    products: {
        name: String,
        image: String,
        price: Number,
        priceDiscount: Number,
    }
*/

export const ProductCard = ({ products }) => {
    const hasDiscount = products.priceDiscount > 0;
    return (
        <div className="productCard-container">
            <img src={products.image} alt={products.product} />
            <div id="productInfo" className={hasDiscount ? "hasDiscount" : ""}>
                <p id="productName">{products.name}</p>
                <span id="productPrice">R$ {products.price.toFixed(2)}</span>
                {hasDiscount && (
                    <span id="productPriceDiscount">
                        R$ {products.priceDiscount.toFixed(2)} ⭐
                    </span>
                )}
            </div>
        </div>
    )
}