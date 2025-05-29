import React from 'react';
import { Carrossel } from '../components/Carrossel';
import Collections from '../components/Collections';
import { ProductListing } from '../components/ProductListing';
import SpecialOffer from '../components/SpecialOffer';


const HomePage = () => {
    return (
        <div>
            <Carrossel />
            <Collections />
            <ProductListing />
            <SpecialOffer />
        </div>
    );
};
export default HomePage;