import React, { createContext, useState } from 'react';
import all_products from '../components/assets/All_product.js';


const getDefaultCart = ()=>{
  let cart = {};
  for (let index = 0; index < (all_products.length)+1; index++) {
    cart[index] = 0;
  }
  return cart;
} 

const ShopContextProvider = (props)=>{ 

  const [cartItems, setCartItems] = useState(getDefaultCart);

  
 const addToCart = (ItemId)=>{
    setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]+1}))
    console.log(cartItems)
 }

 const removeFromCart =(ItemId)=>{
  setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]-1}))
 }

 const contextValue = {all_products, cartItems,addToCart,removeFromCart}; 

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export const ShopContext = createContext(null);
export default ShopContextProvider;