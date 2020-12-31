import { faClock, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './AboutOurInfo.css'

const AboutOurInfo = () => {
    const infoData = [
        {
            title: 'Opening Hours',
            description: 'We are open 7 days',
            icon: faClock,
            background: 'primary'
        },
        {
            title: 'Visit Our Location',
            description: 'Dhaka , Bangladesh',
            icon: faMapMarkerAlt,
            background: 'dark'
        },
        {
            title: 'Call us now',
            description: '+88 01771225965',
            icon: faPhone,
            background: 'danger'
        }
    ]
    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        infoData.map(information => <AboutInfoCard info={information} ></AboutInfoCard>)
                    }
                </div>
            </div>
        </div>
    );
};

const AboutInfoCard = (props) => {
    const { title, description, icon, background } = props.info;
    return (
        <div className='col-md-4 col-sm-6 col-12 info-card text-white'>

            <div className={`d-flex justify-content-center info-container bg-${background}`}>
                <div className='mr-3'>
                    <FontAwesomeIcon className='info-icon' icon={icon} style={{fontSize:"55px"}} />
                </div>
                <div>
                    <h6>{title}</h6>
                    <small>{description}</small>
                </div>
            </div>

        </div>
    );
}

export default AboutOurInfo;