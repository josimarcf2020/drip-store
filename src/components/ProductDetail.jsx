import "../styles/productDetail.css"
import ProductCarrossel from "./ProductCarrossel"

const ProdusctDetail = () => {
    return (
        <>
            <div id="product-detail-container">
                <div id="path-text">
                    <p>Home/</p>
                </div>
                <div id="carrossel-detail-text">
                    <div id="carrossel">
                        <ProductCarrossel />
                    </div>
                    <div id="detail-text-container">

                    </div>
                </div>
            </div>
            <div id="related-products">

            </div>
        </>
        
    )
}

export default ProdusctDetail;

