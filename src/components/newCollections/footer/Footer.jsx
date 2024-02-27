import React from 'react';
import './Footer.css'
import footer_logo from '../../assets/footer.png'

import instagram from '../../assets/instagram_icon.png'
import facebook from '../../assets/facebook_icon.png'
import telegarm from '../../assets/telegram_icon.png'
import youtube_icon from '../../assets/youtube_icon.jpeg'
import linkedIn_icon from '../../assets/linkedIn_icon.jpeg'


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="footer-logo" className='footer-logo-1'/>
                <p>Costumer is King.</p>
                {/* <img src={footer_logo} alt="footer-logo" className='footer-logo-1'/> */}
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
                <li></li>
            </ul>
            <div className="footer-social-icons">
                    <div className="footer-icons-container">
                        <img src={telegarm} alt="" className='social-media'/>
                    </div>
                    <div className="footer-icons-container">
                        <img src={facebook} alt="" className='social-media'/>
                    </div>
                    <div className="footer-icons-container">
                        <img src={youtube_icon} alt="" className='social-media'/>
                    </div>
                    <div className="footer-icons-container">
                        <img src={linkedIn_icon} alt="" className='social-media' />
                    </div>
                    <div className="footer-icons-container">
                        <img src={instagram} alt="" className='social-media'/>
                    </div>
            </div>

            <div className="footer-copyright">
                <hr />
                <p>copyright @ 2023 - all rights reserved!</p>
            </div>
        </div>
    );
}

export default Footer;
