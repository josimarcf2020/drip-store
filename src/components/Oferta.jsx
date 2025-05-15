import SnearkerImage from '../assets/images/White-Sneakers.svg';    
import Ornamento from '../assets/images/Ornament 11.svg';
import '../styles/Oferta.css';

const Oferta = () => {
    return (
        <div id="containerLayout">
            <div id="containerOfertaGeral">
                <div id="containerOferta">
                    <div id="textoOferta">
                        <p id="sobreOferta">Melhores ofertas personalizadas</p>
                        <h1 id="tituloOferta">Queima de estoque Nike 🔥</h1>
                        <p id="descricaoOferta">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                        <button id="botaoVerOferta">Ver Ofertas</button>
                    </div>
                </div>
                <div id="ornamento">
                    <img id="ornamentoImage" src={Ornamento} alt="Imagem de ornamento" />
                </div>
                <div id="containerSneaker">
                    <img id="sneakerImage" src={SnearkerImage} alt="Imagem de tênis" />                            
                </div>
            </div>
        </div>
    )
}

export default Oferta;