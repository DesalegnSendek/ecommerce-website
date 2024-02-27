import React from 'react';
import Hero from '../components/hero/Hero';
import Popular from '../components/popular/Popular.jsx';
import Offers from '../components/offers/Offers.jsx';
import NewCollections from '../components/newCollections/NewCollections.jsx';
import NewsLetter from '../components/newsLetter/NewsLetter.jsx';
import ProductDisplay from '../components/product_display/ProductDisplay.jsx';
import DescriptionBox from '../descriptionBox/DescriptionBox.jsx';
import RelatedProducts from '../components/relatedProducts/RelatedProducts.jsx';

const Shop = () => {
    return (
        <div>
            <Hero />
            <Offers />
            <Popular/>
            <NewCollections />
            <NewsLetter/>
            {/* <RelatedProducts/>
            <ProductDisplay/>
            <DescriptionBox/> */}
        </div>
    );
}

export default Shop;
