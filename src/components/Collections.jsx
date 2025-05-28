import ImageCollection1 from '/collection/collection-1.png';
import ImageCollection2 from '/collection/collection-2.png';
import ImageCollection3 from '/collection/collection-3.png';

import ImageIconesGroup   from '../assets/images/Icones-group.svg'

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
                <img src={ImageIconesGroup} alt="Camiseta" className='icone'/>
            </div>    
        </div>
    )
}

export default Collections;