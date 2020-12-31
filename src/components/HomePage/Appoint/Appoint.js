import React from 'react';
import { Link } from 'react-router-dom';
import doctor from '../../../images/Doctor.png';
import './Appoint.css';

const Appoint = () => {
    return (
        <section className='appoint-container'>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt="" />
                    </div>
                    <div className="col-md-7 py-5 text-white">
                        <h5 style={{ color: '#11D0E1' }} >APPOINTMENT</h5>
                        <h2 className='my-4'>Make an appointment <br /> Today</h2>
                        <p>It is a long established fact that a render will be distracted by the readable contact of a page when looking at its.</p>
                        <Link to='/dashboard/appointment'>
                            <button className="button-style my-4">Dashboard appointment</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appoint;