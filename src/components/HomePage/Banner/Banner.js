import React from 'react';
import chair from '../../../images/chair.png'
import './Banner.css'
import {
    Link
} from "react-router-dom";


const Banner = () => {
    return (
        <div className="banner-area">
            <div style={{ height: '600px' }} className="row d-flex align-items-center ">
                <div className="col-md-4 col-sm-6 col-12 offset-md-1 offset-sm-0">
                    <div className="banner-item">
                        <h1 style={{ color: '#3A4256' }}>Your New <span style={{color:"#FF9800"}}>Smile</span> <br /> Starts Here</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab fugit at quam, odio possimus incidunt blanditiis ea excepturi dicta.
                    </p>
                        <Link to='/appointment'>
                            <button className="button-style">GET APPOINTMENT</button>
                        </Link>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                    <div className="banner-img">
                        <img src={chair} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;