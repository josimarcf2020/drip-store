import "../styles/Footer.css"
import { Logo } from "./Logo"
import { Informations } from "./Informations"
import { IconsSocialMedia } from "./IconsSocialMedia"

export const Footer = () => {
    const informacoes = [
        {"text":"Sobre Drip-Store", "link":"/sobre"}, 
        {"text":"Segurança", "link":"/seguranca"}, 
        {"text":"Whishlist", "link":"/wishlist"}, 
        {"text":"Blog", "link":"/blog"}, 
        {"text":"Trabalhe conosco", "link":"/trabalhe-conosco"}, 
        {"text":"Meus Pedidos", "link":"/meus-pedidos"}
    ]
    const informacoes1 = [
        {"text":"Camisetas", "link":"/camisetas"}, 
        {"text":"Calças", "link":"/calcas"}, 
        {"text":"Bonés", "link":"/bones"}, 
        {"text":"Headphones", "link":"/headphones"}, 
        {"text":"Tênis", "link":"/tenis"}
    ]
    return (
        <footer id='footer'>
            <div id="col1">
                <div id="logo-container">
                    < Logo className="whiteIcon"/>                
                </div>
                <div id="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium unde mollitia error, perspiciatis fugiat neque nobis. Quas blanditiis illum porro cupiditate, vel, natus molestias rerum deleniti nisi, atque accusamus repellat.</p>
                </div>
                <div id="icons">
                    < IconsSocialMedia className="whiteIcon" />
                </div>
            </div>
            <div id="grupos">
                <div className='grupo' id="coluna1">
                    < Informations title="Informações" informations={ informacoes } />
                </div>
                <div className='grupo' id="coluna2">
                    < Informations title="Categorias" informations={ informacoes1 } />
                </div>
                <div id="coluna3" className="grupo">
                    <div className="informationsTitle">
                        <strong>Contato</strong>
                    </div>
                    <div className="informations">
                        <p>Av. Santos Dumont, 1510 - 1º andar - Aldeota, Fortaleza-CE, 60150-161</p>
                        <p>(85) 3051-3411</p>
                    </div>
                </div>
            </div>
            <div id="linha"><hr /></div>
            <div  id="direitos">
                <p>©{new Date().getFullYear()} Josimar Ferreira</p>
            </div>
        </footer>
    )
}