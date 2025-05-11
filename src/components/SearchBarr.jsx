import searchImage from '../assets/images/search.svg';
import "../styles/SearchBarr.css"

export const SearchBarr = ({ placeholder }) => {
    return (
        <div id="inputPesquisa">
            <div>
                <input class="form-control me-2" type="search" placeholder={ placeholder } aria-label="Search"/>
            </div>
            <div id='searchIcon'>
                <img src={searchImage} alt="Imagem de uma lupa" />
            </div>
        </div>
    )
}