import ImageCollection1 from '/collection/collection-1.png';
import ImageCollection2 from '/collection/collection-2.png';
import ImageCollection3 from '/collection/collection-3.png';

import ImageSkirtIcon     from '../assets/images/skirt.svg';
import ImagePantsIcon     from '../assets/images/pants.svg';
import ImageCapIcon       from '../assets/images/cap.svg';
import ImageSneakerIcon   from '../assets/images/sneaker-icon.svg';

import '../styles/Collections.css';


const Collections = () => {
    return (
        <div id='collections-container'>
            <h3 id='titulo-colecoes' className='title'>Coleções em destaque</h3>
            <div id='images-container'>
                <img src={ImageCollection1} alt="Coleção 1 em destaque" className="rounded"/>
                <img src={ImageCollection2} alt="Coleção 2 em destaque" className="rounded"/>
                <img src={ImageCollection3} alt="Coleção 3 em destaque" className="rounded"/>
            </div>
            <div id='icones-container'>
                <h3 id='titulo-icones' className='title'>Coleções em destaque</h3>
                <div id="icones-container-icones">
                    <img src={ ImageSkirtIcon }   alt="Ícone camiseta" className="align-bottom"/>                        
                    <img src={ ImagePantsIcon }   alt="Ícone calça" className="align-bottom"/>
                    <img src={ ImageCapIcon }     alt="Ícone boné"  className="align-bottom"/>
                    <img src={ ImageSneakerIcon } alt="Ícone tênis"  className="align-bottom"/>
                </div>
            </div>    
        </div>
    )
}

export default Collections;