import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../context/ShopContext';
import drop_down from '../components/assets/drop_down_icon.png';
import Item from '../components/items/Item';


const ShopCategory = (props) => {
     const {all_products} = useContext(ShopContext);

     return(
         <div className="shop-category">
             <img src={props.banner} alt="" className='banner'/>
              <div className="shop-category-index-sort">
                    <p className='paragraph'> <span>Showing 1-12</span> out of 20 products </p>
                   
                    <div className="shop-category-sort">
                        Sort by <img src={drop_down} alt="drop_down" className='drop-down'/>
                    </div>
             </div>   
                  <div className="shop-category-products">
                  {all_products.map((it,i) =>{
                    if(props.category===it.category){
                        return <Item key={i} id={it.id} name={it.name} image={it.image} new_price={it.new_price} old_price={it.old_price} />
                    }
                    else{
                      return null;
                    }
                  })}
                </div>
                <div className="shop-category-load-more">
                      Explore more
                </div>
      </div> 
       
     );
 }

export default ShopCategory;
