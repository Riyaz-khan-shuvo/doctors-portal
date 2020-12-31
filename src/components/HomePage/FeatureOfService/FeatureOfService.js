import React from 'react';
import FeaturedImage from '../../../images/dentalCare.png';
import './FeatureOfService.css'
const FeatureOfService = () => {
    return (
        <div className="container feature mb-5">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-5">
                    <div className="feature-img">
                        <img src={FeaturedImage} alt="" />
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="feature-description ">
                        <h3 className="mb-3">Exceptional Dental <br />
                        Care, On your Terms
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum molestiae possimus fugit exercitationem asperiores sapiente ad, officia doloremque vel corrupti vitae dolorum velit reprehenderit fuga sed accusamus architecto temporibus. Fugiat, ipsum, iusto necessitatibus itaque voluptatum laudantium, explicabo tempore accusantium et dicta dignissimos consequatur cupiditate! Laborum ab dolorum libero eius at nihil neque id corrupti?
                    </p>
                    <button className="button-style my-3">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureOfService;