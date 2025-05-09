import vectorImage from '../assets/images/vector.svg'

export const Logo = () => {
    return (
        <div id="logo">
            <div id="vector">
                <img src={vectorImage} alt="Imagem de Vector" />
            </div>
            <div id="marca">
                <p>Drip-store</p>
            </div>
        </div>
    )
}