import Oferta from './Oferta';
import ImageCollection1 from '/collection/collection-1.png';
import ImageCollection2 from '/collection/collection-2.png';
import ImageCollection3 from '/collection/collection-3.png';
import '../styles/Carrossel.css';

const Carrossel = () => {
    return (
        <div id="carrossel">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Oferta />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Melhores ofertas</h5>
                            <p>Queima de estoque Nike.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={ImageCollection1} class="d-block w-100" alt="Tênis Nike Gamma Force (Branco/Roxo?Laranja)" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Novo drop supreme.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={ImageCollection2} class="d-block w-100" alt="Tênis Nike Gamma Force (Branco/Roxo?Laranja)" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Coleção Adidas</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={ImageCollection3} class="d-block w-100" alt="Tênis Nike Gamma Force (Branco/Roxo?Laranja)" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Novo beat bass</h5>
                            <p>Some representative placeholder content for the fourth slide.</p>
                        </div>
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

}

export default Carrossel;