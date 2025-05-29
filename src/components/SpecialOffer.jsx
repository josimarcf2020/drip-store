import ImageLaye from '../assets/images/laye1.svg';
import ImageElipse from '../assets/images/Ellipse11.svg';

// Se este componente tiver estilos próprios, considere importá-los aqui:
import '../styles/SpecialOffer.css'; // Exemplo de nome de arquivo CSS

const SpecialOffer = () => {
    
    return (
        <section id="special-offer"> {/* Anteriormente 'laye_container' */}
            <div id="special-offer-image-container">
                <img src={ ImageElipse } alt="Elipse em degradê" id='special-offer-image-elipse'/>
                <img src={ ImageLaye } alt="Tênis Air Jordan em oferta especial" id="special-offer-product-image" />
            </div>
            <div id="special-offer-content"> {/* Anteriormente 'special_ofer' */}
                <p id='special-offer-title'>Oferta especial</p>
                <h2 id='special-offer-title-destak' className="special-offer-title">Air Jordan edição de colecionador</h2>
                <p id='special-offer-description' className="special-offer-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et architecto iste minima quam iure laboriosam modi, fugit facilis reprehenderit. A sequi molestiae, eveniet magni voluptates obcaecati dolores magnam aliquam asperiores.</p>
                <button id='special-offer-button' type="button" className="special-offer-button">Ver Oferta</button>
            </div>
        </section>
    )
}

export default SpecialOffer;