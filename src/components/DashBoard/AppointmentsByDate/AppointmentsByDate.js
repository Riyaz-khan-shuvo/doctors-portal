import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({ appointments }) => {
    console.log(appointments);

    return (
        <div>
            <h2 className='text-center textBrand'>Appointment</h2>
           <div style={{border: '1px solid lightGray'}}>
           {
                appointments.length ?
                <AppointmentShortList appointments={appointments}></AppointmentShortList> 
                :
                <div className='p-5'>
<h4 className="text-center">No appointments for this date</h4>
                </div>
            }
           </div>
            
        </div>
    );
};

export default AppointmentsByDate;