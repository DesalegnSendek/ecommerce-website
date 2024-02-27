import React from 'react';
import './NewsLetter.css';


const NewsLetter = () => {
    return (
        <div className='news-letter'>
            <h1>Get exclussive offers in your email</h1>
            <p>Subscribe to our newsletter and stay updated!</p>
            <div>
                <input type="email" name="email" id="email" placeholder='Your Email ID' required/>
                <button type="submit">Subscribe</button>
            </div>
        </div>
    );
}

export default NewsLetter;
