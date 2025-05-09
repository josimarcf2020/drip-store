import vectorImage  from '../assets/images/vector.svg'
import buyImage     from '../assets/images/buy.svg'
import searchImage  from '../assets/images/search.svg'
import { Logo } from './Logo';

export const Header = () => {
    return (
        <section id="header">
            <div id="cabecalho">
                <div id="linha1">
                    <div id='logoPesquisa'>
                        <Logo />
                        <div id="pesquisa">
                            <div id="inputPesquisa">
                                <div>
                                    <input class="form-control me-2" type="search" placeholder="Pesquisar produto" aria-label="Search"/>
                                </div>
                                <div id='searchIcon'>
                                    <img src={searchImage} alt="Imagem de uma lupa" />
                                </div>
                            </div>
                            <div id="linkCadastrese">
                                <a href="#">Cadastre-se</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="linha2">
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">Home</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Produtos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Categorias</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Meus Pedidos</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div id="btEntrarCarrinho">
                <div id="botaoEntrar">
                    <button id='btEntrar'>Entrar</button>            
                </div>
                <div id="carrinhoDeCompras">
                    <img src={buyImage} alt="Imagem de carrinho de compras" />
                </div>
            </div>             
        </section>
    );
}