import '../styles/HomePage.css';

import Carrossel from '../components/Carrossel.jsx';
import Collections from '../components/Collections.jsx';
import {ProductListing} from '../components/ProductListing.jsx';
import SpecialOffer from '../components/SpecialOffer.jsx';

const HomePage = () => {
    return (
        <div id='children'>
            <Carrossel />
            <Collections />
            <ProductListing />
            <SpecialOffer />
        </div>
    );
};
export default HomePage;