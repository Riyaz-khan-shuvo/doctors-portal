import React from 'react';
import './serviceDetails.css'

const ServiceDetails = (props) => {


    const { img, title } = props.services;

    return (
        <div className="col-md-4 my-5 text-center ml-auto">
            <div className="img d-flex justify-content-center mb-3" >
                <img src={img} alt="" />
            </div>

            <div className="service-detail">
                <h3> {title} </h3>
                <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, vitae ipsam amet praesentium asperiores temporibus eveniet. Tempora debitis unde praesentium, ducimus quisquam cumque ex accusantium!
            </p>
            </div>
        </div>
    );
};

export default ServiceDetails;