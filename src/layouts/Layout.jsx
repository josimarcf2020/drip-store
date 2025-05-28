import "../styles/Layout.css";
import { Outlet } from "react-router-dom";
// Este bundle já inclui o Popper.js
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}