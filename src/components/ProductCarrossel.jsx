import '../styles/ProductCarrossel';

import ImageProduct1 from '../assets/images/sneaker1.svg';
import ImageProduct2 from '../assets/images/sneaker2.svg';
import ImageProduct3 from '../assets/images/sneaker3.svg';
import ImageProduct4 from '../assets/images/sneaker4.svg';
import ImageProduct5 from '../assets/images/sneaker5.svg';

const ProductCarrossel = () => {
    return (
        <div id="carrossel">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ ImageProduct1 } class="d-block w-100" alt="Tênis Nike Gamma Force (Branco/Roxo?Laranja)" />
                    </div>
                    <div className="carousel-item">
                        <img src={ ImageProduct2 } class="d-block w-100" alt="Tênis Nike Gamma Force (Branco/Roxo?Laranja)" />
                    </div>
                    <div className="carousel-item">
                        <img src={ ImageProduct3 } class="d-block w-100" alt="Tênis Nike Gamma Force (Branco/Roxo?Laranja)" />
                    </div>
                    <div className="carousel-item">
                        <img src={ ImageProduct4 } class="d-block w-100" alt="Tênis Nike Gamma Force (Branco/Roxo?Laranja)" />
                    </div>
                    <div className="carousel-item">
                        <img src={ ImageProduct5 } class="d-block w-100" alt="Tênis Nike Gamma Force (Branco/Roxo?Laranja)" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
};

export default ProductCarrossel;