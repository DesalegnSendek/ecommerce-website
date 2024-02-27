import React from 'react';
import './BreadCrum.css';
import arrow_icon from '../assets/arrow.png';

const BreadCrum = (props) => {
  const { all_products } = props;

  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {all_products?.category} <img src={arrow_icon} alt="" /> {all_products?.name}
    </div>
  );
}

export default BreadCrum;
