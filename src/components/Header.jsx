import "../styles/Header.css"
import buyImage     from '../assets/images/buy.svg'
import { Logo } from './Logo';
import { SearchBarr } from "./SearchBarr";
import { NavBarr } from "./NavBarr";

export const Header = () => {
    return (
        <section id="header">
            <div id="cabecalho">
                <div id="linha1">
                    <div id='logoPesquisa'>
                        <Logo />
                        <div id="pesquisa">
                            < SearchBarr placeholder="Pesquisar produtos" />
                            <div id="linkCadastrese">
                                <a href="#">Cadastre-se</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="linha2">
                    < NavBarr />
                </div>
            </div>
            <div id="btEntrarCarrinho">
                <div id="containerbotaoEntrar">
                    <button id="btEntrar">Entrar</button>            
                </div>
                <div id="carrinhoDeCompras">
                    <img src={buyImage} alt="Imagem de carrinho de compras" />
                </div>
            </div>             
        </section>
    );
}