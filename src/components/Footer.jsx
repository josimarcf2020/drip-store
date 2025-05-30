import "../styles/Footer.css"
import { Logo } from "./Logo"
import { Informations } from "./Informations"
import { IconsSocialMedia } from "./IconsSocialMedia"

export const Footer = () => {
    const informacoes = [
        {"text":"Sobre Drip-Store", "link":"/sobre"}, 
        {"text":"Segurança", "link":"/seguranca"}, 
        {"text":"Wishlist", "link":"/wishlist"}, 
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
        <footer id="footer">
            <div id="col1">
                <div id="logo-container">
                    <Logo className="whiteIcon"/>                
                </div>
                <div id="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium unde mollitia error, perspiciatis fugiat neque nobis. Quas blanditiis illum porro cupiditate, vel, natus molestias rerum deleniti nisi, atque accusamus repellat.</p>
                </div>
                <div id="icons">
                    <IconsSocialMedia className="whiteIcon" />
                </div>
            </div>
            <div id="footer-info-columns"> {/* Alterado ID para corresponder ao CSS */}
                <div className='footer-column'> {/* Usando a classe padrão para colunas */}
                    <Informations title="Informações" informations={ informacoes } />
                </div>
                <div className='footer-column'> {/* Usando a classe padrão para colunas */}
                    <Informations title="Categorias" informations={ informacoes1 } />
                </div>
                <div className="footer-column"> {/* Usando a classe padrão para colunas */}
                    <div className="informationsTitle">
                        <strong>Contato</strong>
                    </div>
                    <div className="informations-list"> {/* Usando a mesma classe para consistência, mesmo sem links */}
                        <p>Av. Santos Dumont, 1510 - 1º andar - Aldeota, Fortaleza-CE, 60150-161</p>
                        <p>(85) 3051-3411</p>
                    </div>
                </div>
            </div>
            <hr id="linha" /> {/* Movido hr para fora da div, ou pode ser estilizado como div */}
            <div id="direitos">
                <p>©{new Date().getFullYear()} Josimar Ferreira</p>
            </div>
        </footer>
    )
}