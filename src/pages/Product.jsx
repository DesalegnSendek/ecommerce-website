import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import ProductDisplay from '../components/product_display/ProductDisplay';
import BreadCrum from '../components/breadcrum/BreadCrum';
import DescriptionBox from '../descriptionBox/DescriptionBox';
import RelatedProducts from '../components/relatedProducts/RelatedProducts';

const Product = () => {
    const {all_products} = useContext(ShopContext);
    const {productId} = useParams();//getting ID
    const product = all_products.find((e)=>e.id === Number(productId))//comparig product id with the selected
    return ( 
        <div>
          <BreadCrum product={product} />
          <ProductDisplay product={product}/>
          <DescriptionBox />
          <RelatedProducts/>
        </div>
    )
  }
  export default Product


