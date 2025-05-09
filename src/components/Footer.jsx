import "../styles/Footer.css"
import InstaImage from "../assets/images/instagram.svg"
import LinkedImage from "../assets/images/linkedin.svg"
import TwitterImage from "../assets/images/twitter-x.svg"
import { Logo } from "./Logo"

export const Footer = () => {
    return (
        <div id='footer'>
            <div id="logo-container">
                < Logo />                
            </div>
            <div id="icons">
                <div id="icon1">
                    <a href="https://www.instagram.com/"><img src={InstaImage} alt="Instagram" /></a>
                </div>
                <div id="icon2">
                    <a href="https://www.linkedin.com/"><img src={LinkedImage} alt="Facebook" /></a>
                </div>
                <div id="icon3">
                    <a href="https://twitter.com/"><img src={TwitterImage} alt="Twitter" /></a>
                </div>
            </div>
        </div>
    )
}