import { faFacebookF, faGooglePlus, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css';

const Footer = () => {
    const noNamed = [
        { name: "Emergency Dental Care", link: "/emergency" },
        { name: "Check Up", link: "/checkup" },
        { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        { name: "Tooth Extraction", link: "/tooth-extract" },
        { name: "Check Up", link: "/checkup" },
    ]
    const services = [
        { name: "Emergency Dental Care", link: "/emergency" },
        { name: "Check Up", link: "/checkup" },
        { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        { name: "Tooth Extraction", link: "/tooth-extract" },
        { name: "Check Up", link: "/checkup" },
        { name: "Check Up", link: "/checkup" },
        { name: "Check Up", link: "/checkup" }
    ]
    const oralHealth = [
        { name: "Emergency Dental Care", link: "/emergency" },
        { name: "Check Up", link: "/checkup" },
        { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
        { name: "Tooth Extraction", link: "/tooth-extract" },
        { name: "Check Up", link: "/checkup" },
        { name: "Check Up", link: "/checkup" },
        { name: "Check Up", link: "/checkup" }
    ]
    const ourAddress = [
        { name: "Dhaka , Bangladesh", link: "https://www.google.com/maps" },
        { name: "Mirpur", link: "https://www.google.com/maps" },

    ]

    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}></FooterCol>
                    <FooterCol key={2} menuTitle={'Services'} menuItems={services}></FooterCol>
                    <FooterCol key={3} menuTitle={"Oral Health"} menuItems={oralHealth}></FooterCol>
                    <FooterCol key={4} menuTitle={'Our Address'} menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item">
                                <a href="//facebook.com">
                                    <FontAwesomeIcon className='icon active-icon' icon={faFacebookF} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="//google.com">
                                    <FontAwesomeIcon className='icon' icon={faGooglePlus} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="//instagram.com">
                                    <FontAwesomeIcon className='icon' icon={faInstagram} />
                                </a>
                            </li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call Now</h6>
                            <button className="button-style">+88 01771225965</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All rights reserved by 
                    <a href="https://riyaz-khan-shuvo.netlify.app/" target="_blank"> @Riyaz-Hossain</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;