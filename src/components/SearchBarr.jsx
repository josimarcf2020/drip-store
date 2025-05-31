import searchImage from '../assets/images/search.svg'; // Ensure this file exists and the path is correct
import "../styles/SearchBarr.css"; // Ensure this file exists and the path is correct

export const SearchBarr = ({ placeholder }) => {
    return (
        <div id="inputPesquisa">
            <div>
                <input className="form-control me-5" type="search" placeholder={ placeholder } aria-label="Search"/>
            </div>
            <div id='searchIcon'>
                <img src={searchImage} alt="Imagem de uma lupa" />
            </div>
        </div>
    )
}