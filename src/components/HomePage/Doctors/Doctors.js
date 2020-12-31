import React, { useEffect } from 'react';
import Doctor from '../Doctor/Doctor';
import doctor from '../../../images/doctor-sm.png';
import { useState } from 'react';

const doctorData = [
    { name: 'Dr. Shuvo', image: doctor, phone: '+88 01771225965' },
    { name: 'Dr. Shuvo', image: doctor, phone: '+88 01771225965' },
    { name: 'Dr. Shuvo', image: doctor, phone: '+88 01771225965' }]

const Doctors = () => {
    // const [doctorData, setDoctorData] = useState([]);
    // useEffect(() => {
    //     fetch('https://guarded-mesa-64786.herokuapp.com/doctors')
    //     .then(res => res.json())
    //     .then(data => setDoctorData(data))
    // }, [])

    return (
        <section className="my-5 py-5 ">
            <div className="container">
                <h4 className="text-center text-info">Our Doctors</h4>
                <div className="row mt-3">
                    {
                        doctorData.map(data => <Doctor doctor={data}></Doctor>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Doctors;