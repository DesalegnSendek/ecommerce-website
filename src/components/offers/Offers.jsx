import React from 'react';
import './Offers.css';
import image from '../assets/woman6.webp'



const Offers = () => {
    return (
        <div className='offers'>
            <div className="offers-left">
                <div><h1>Exclussive</h1></div>
                 <h1>Offers For You</h1>
                 <p>ONLY ON BEST SELLERS PRODUCTS</p>
                 <button>Check now</button>
            </div>

            <div className="offers-right">
                <img src={image} alt="" />
            </div>
        </div>
    );
}

export default Offers;
