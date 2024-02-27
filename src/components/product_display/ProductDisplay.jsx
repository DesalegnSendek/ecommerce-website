import React, { useContext, useState } from 'react';
import './Product_display.css';
import star_icon from '../assets/star_icon.png';
import star_dull from '../assets/star_dull.png';
import kid from '../assets/man2.jpg'
import { ShopContext } from '../../context/ShopContext';



const ProductDisplay = (props) => {
  const { product } = props;
  const addToCart = useContext(ShopContext);


  const [selectedImage, setSelectedImage] = useState(product?.image);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  
  return (
    <div className='product-display'>
      <div className="left">
        <div className="product-image-list">
          {product?.image.map((image, ItemId) => (
            <img
              key={ItemId}
              src={product.image}
              alt=""
              fluid
              onClick={() => handleImageClick(image)}
            />
          ))}
          <img src={kid} alt="" />
          <img src={kid} alt="" />
          <img src={kid} alt="" />
          <img src={kid} alt="" />
          <img src={kid} alt="" />

                        
        </div>
        <div className='product-display-image'>
            <img className='product-display-main-img' src={kid} alt="" />

        </div>
      </div>

      <div className="right">
        <h1>{product?.name}</h1>
        <div className="product-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull} alt="" />
          <p>(731)</p>
        </div>

        <div className="prices">
          <div className="old">${product?.old_price} 733</div>
          <div className="new">${product?.new_price}874</div>
        </div>
        <div className="product-description">
          A light weight, usually jnitted, pullover shirt and clothes, close-fitting appearances.
        </div>
        <div className="product-size">
          <h1>select size</h1>
          <div className="product-size-display">
            <div>Small</div>
            <div>Medium</div>
            <div>Large</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button >Add to Cart</button>
        <p className='display-category'>
          <span>Category:</span>
          Women, T-shirt, crop-top
        </p>
        <p className='display-category'>
          <span>tags:</span>
          Women-latest, T-shirt, crop-top
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
