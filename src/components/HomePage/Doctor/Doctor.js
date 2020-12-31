import React from 'react';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Doctor = ({ doctor }) => {
    return (
        <div className='col-md-4 col-sm-6 text-center'>
            <img style={{ height: '200px'}} src={doctor.image} alt=""/>
            <h4>{doctor.name}</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt} /> {doctor.phone} </p>
        </div>
    );
};

export default Doctor;