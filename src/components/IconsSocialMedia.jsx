import InstaImage from "../assets/images/instagram.svg"
import LinkedImage from "../assets/images/linkedin.svg"
import TwitterImage from "../assets/images/twitter-x.svg"
import "../styles/IconsSocialMedia.css"

export const IconsSocialMedia = ({ className }) => {
    return (
        <>
            <div id="icon1" className="icon">
                <a href="https://www.instagram.com/"><img src={InstaImage} alt="Instagram" className={className}/></a>
            </div>
            <div id="icon2" className="icon">
                <a href="https://www.linkedin.com/"><img src={LinkedImage} alt="Facebook" className={className}/></a>
            </div>
            <div id="icon3" className="icon">
                <a href="https://twitter.com/"><img src={TwitterImage} alt="Twitter" className={className}/></a>
            </div>
        </>
    )
}