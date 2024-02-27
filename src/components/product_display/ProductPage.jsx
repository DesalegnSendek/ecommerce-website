import React from 'react';

const ProductPage = ({ product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Add more details or components as needed */}
    </div>
  );
};

export default ProductPage;