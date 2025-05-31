import { Link } from 'react-router-dom';
import '../styles/navbar.css'

export const NavBarr = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/products">Produtos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categories">Categorias</Link> {/* Exemplo: alterado href="#" para um Link */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/my-orders">Meus Pedidos</Link> {/* Exemplo: alterado href="#" para um Link */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}