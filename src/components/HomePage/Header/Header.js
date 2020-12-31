import React from 'react';
import './Header.css'

import Banner from '../Banner/Banner';
import AboutOurInfo from '../AboutOurInfo/AboutOurInfo';


const Header = () => {
    return (
        <div>
            <div className="header-area">
                
                <Banner />
            </div>
            <AboutOurInfo />
        </div>
    );
};

export default Header;