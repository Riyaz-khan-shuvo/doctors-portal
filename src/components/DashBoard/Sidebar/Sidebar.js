import { faGripHorizontal, faCalendar, faUser, faFileAlt, faCog, faSignOutAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        fetch('https://guarded-mesa-64786.herokuapp.com/isDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(response => response.json())
            .then(data => setIsDoctor(data))
    }, [])

    return (
        <div className="sidebar col-md-2 d-flex flex-column justify-content-between py-5 px-4" style={{ height: '100vh' }}>
            <ul className="list-unstyled">
                <li>
                    <Link to='/doctor/dashboard' className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>DashBoard</span>
                    </Link>
                </li>

                {
                    isDoctor && <div>
                        <li>
                            <Link to='/dashboard/appointment' className="text-white">
                                <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
                            </Link>
                        </li>

                        <li>
                            <Link to='/dashboard/allPatients' className="text-white">
                                <FontAwesomeIcon icon={faUser} /> <span>Patients</span>
                            </Link>
                        </li>

                        <li>
                            <Link to='/dashboard/addDoctor' className="text-white">
                                <FontAwesomeIcon icon={faUserAlt} /> <span>Add Doctor</span>
                            </Link>
                        </li>

                        <li>
                            <Link to='/doctor/prescriptions' className="text-white">
                                <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
                            </Link>
                        </li>

                        <li>
                            <Link to='/doctor/setting' className="text-white">
                                <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                            </Link>
                        </li>
                    </div>
                }

            </ul>
            <div>
                <Link to='/' className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /><span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;