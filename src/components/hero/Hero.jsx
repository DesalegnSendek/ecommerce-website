import React from 'react';
import './Hero.css';
// import icon from '../../../src/logo.svg';
import arrow from'../assets/arrow.png';
import hand_icon from '../assets/icon.jpeg';
import woman from '../assets/wearing.jpg';
 

const Hero = () => {
    return (
        <div className='hero'>
                <div className="hero-left">
                    <h2>New Arivals only</h2>
                <div>

                <div className="hero-hand-icon">
                        <p>New</p>
                        <img src={hand_icon} alt='icon'/>
                </div>
                        <p>Collections</p>
                        <p>For everyone</p>
        </div>
             <div className="hero-latest-btn">
                
                <button>
                Latest collections
                <img src={arrow} alt="arrow" />
                </button>
            </div>
            </div>
            
            <div className="hero-right">
                <img src={woman} className='woman-wearing-shoe'></img>
            </div>
        </div>
    );
}

export default Hero;
