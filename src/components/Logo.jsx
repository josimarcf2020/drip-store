import vectorImage from '../assets/images/vector.svg'
import "../styles/Logo.css"

export const Logo = ({ className}) => {
    return (
        <div id="logo" className={className}>
            <div id="vector">
                <img src={vectorImage} alt="Imagem de Vector" />
            </div>
            <div id="marca">
                <p>Drip-store</p>
            </div>
        </div>
    )
}