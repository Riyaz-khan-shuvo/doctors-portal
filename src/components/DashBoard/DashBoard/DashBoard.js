import React, { useEffect, useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import Drawer from '../Drawer/Drawer'

const DashBoard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([])

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    useEffect(() => {
        fetch('https://guarded-mesa-64786.herokuapp.com/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setAppointments(data);
            })
    }, [selectedDate])

    const containerStyle = {
        backgroundColor: "#F4FDFB",
        height: "100%"
    }

    return (
        <section style={containerStyle}>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-2">
                    <Drawer />
                </div>
                <div className="col-md-4 offset-md-1 py-5">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-4 my-5">
                    <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
                </div>
            </div>
        </section>
    );
};

export default DashBoard;