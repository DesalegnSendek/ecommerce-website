import React from 'react';
import './NewCollections.css';
import NewCollection from '../assets/NewCollection.js';
import Item from '../items/Item.jsx';

const NewCollections = () => {
    return (
        <div className='new-collections'>
            <h1>New Collections</h1>
            <hr />
            <div className="collections">
                 {NewCollection.map((items,i)=>{
                     return <Item key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price}/>
                 })}
            </div>
        </div>
    );
}

export default NewCollections;
