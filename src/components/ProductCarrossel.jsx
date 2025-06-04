import '../styles/ProductCarrossel.css';

import ImageProduct1 from '../assets/images/sneaker1.svg';
import ImageProduct2 from '../assets/images/sneaker2.svg';
import ImageProduct3 from '../assets/images/sneaker3.svg';
import ImageProduct4 from '../assets/images/sneaker4.svg';
import ImageProduct5 from '../assets/images/sneaker5.svg';

const ProductCarrossel = () => {
    return (
        <div id="carouselProduct" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselProductIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselProductIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselProductIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselProductIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselProductIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={ ImageProduct1 } class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={ ImageProduct2 } class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={ ImageProduct3 } class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item active">
                    <img src={ ImageProduct4 } class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={ ImageProduct5 } class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselProduct" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselProduct" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
};

export default ProductCarrossel;