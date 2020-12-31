import React, { useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar'
import AppointmentBook from '../AppointmentBook/AppointmentBook';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    const handleDateChange = date => {
        setSelectedDate(date);
    }
    return (
        <div>
            <Navbar />
            <AppointmentHeader />
            <AppointmentBook key={"1"} date={selectedDate} />
        </div>
    );
};

export default Appointment;