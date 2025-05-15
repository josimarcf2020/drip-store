import "../styles/Layout.css";
import Ornamento from "../assets/images/Ornament 11.svg";
import SnearkerImage from "../assets/images/White-Sneakers.svg";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            { children }
            <Footer />
        </>
    )
}