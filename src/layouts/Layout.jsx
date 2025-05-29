import "../styles/Layout.css";
import { Outlet } from "react-router-dom";
// Este bundle já inclui o Popper.js
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Layout = ({ children }) => { // Se você usa Outlet, children pode não ser necessário aqui
    return (
        <div className="layout-container"> {/* Adicionado wrapper */}
            <Header />
            <main className="main-content">
                {children ? children : <Outlet />} {/* Prioriza children, senão usa Outlet */}
            </main>
            <Footer />
        </div>
    )
}