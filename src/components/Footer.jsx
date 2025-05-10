import "../styles/Footer.css"
import InstaImage from "../assets/images/instagram.svg"
import LinkedImage from "../assets/images/linkedin.svg"
import TwitterImage from "../assets/images/twitter-x.svg"
import { Logo } from "./Logo"

export const Footer = () => {
    return (
        <div id='footer'>
            <div id="col1">
                <div id="logo-container">
                    < Logo className="whiteIcon"/>                
                </div>
                <div id="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium unde mollitia error, perspiciatis fugiat neque nobis. Quas blanditiis illum porro cupiditate, vel, natus molestias rerum deleniti nisi, atque accusamus repellat.</p>
                </div>
                <div id="icons">
                    <div id="icon1" class="icon">
                        <a href="https://www.instagram.com/"><img src={InstaImage} alt="Instagram" className="whiteIcon"/></a>
                    </div>
                    <div id="icon2" class="icon">
                        <a href="https://www.linkedin.com/"><img src={LinkedImage} alt="Facebook" className="whiteIcon"/></a>
                    </div>
                    <div id="icon3" class="icon">
                        <a href="https://twitter.com/"><img src={TwitterImage} alt="Twitter" className="whiteIcon"/></a>
                    </div>
                </div>
            </div>
            <div id="grupos">
                <div class='grupo' id="coluna1">
                    <div id="group8035">
                        <strong>Informação</strong>
                    </div>
                    <div id="group8035-1">
                        <p>Sobre Drip-Store</p>
                        <p>Segurança</p>
                        <p>Whishlist</p>
                        <p>Blog</p>
                        <p>Trabalhe conosco</p>
                        <p>Meus Pedidos</p>
                    </div>
                </div>
                <div class='grupo' id="coluna2">
                    <div id="group8034">
                        <strong>Categorias</strong>
                    </div>
                    <div id="group8034-1">
                        <p>Camisetas</p>
                        <p>Calças</p>
                        <p>Bonés</p>
                        <p>Headphones</p>
                        <p>Tênis</p>
                    </div>
                </div>
                <div id="coluna3" className="grupo">
                    <div id="group53512">
                        <strong>Contato</strong>
                    </div>
                    <div id="group53512-1">
                        <p>Av. Santos Dumont, 1510 - 1º andar - Aldeota, Fortaleza-CE, 60150-161</p>
                        <p>(85) 3051-3411</p>
                    </div>
                </div>
            </div>
            <div id="linha"><hr /></div>
            <div  id="direitos">
                <p>©2025 Josimar Ferreira</p>
            </div>
        </div>
    )
}