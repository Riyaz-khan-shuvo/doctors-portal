import React from 'react';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';




const Service = () => {

    const serviceData = [
        {
            img: fluoride,
            title: "Fluoride Treatment"
        },
        {
            img: cavity,
            title: "Cavity Filling"
        },
        {
            img: whitening,
            title: "Teeth Whitening"
        },
    ]

    return (
        <div className="my-3 service-area">
            <div className="text-center">
                <h5 style={{ color: "#1CC7C1", fontWeight: "700" }}>Our Services</h5>
                <h3>Service We Provide</h3>
            </div>
            <div className="container">
                <div className="row">
                    {
                        serviceData.map(services => <ServiceDetails services={services} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;