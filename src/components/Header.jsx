import "../styles/Header.css"
import buyImage     from '../assets/images/buy.svg'
import { Logo } from './Logo';
import { SearchBarr } from "./SearchBarr";
import { NavBarr } from "./NavBarr";

export const Header = () => {
    return (
        <section id="header">
            <div id="linha1">
                <Logo />
                <SearchBarr placeholder="Pesquisar produtos" />
                <a id="linkCadastrar" href="#">Cadastre-se</a>
                <button id="btEntrar">Entrar</button>                             
                <img src={buyImage} alt="Imagem de carrinho de compras" />                
            </div>
            <div id="linha2">
                < NavBarr />
            </div>
                         
        </section>
    );
}