import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar'
import FeatureOfService from '../FeatureOfService/FeatureOfService';
import Header from '../Header/Header'
import Service from '../Service/Service';
import Appoint from '../Appoint/Appoint'
import Testimonials from '../Testimonials/Testimonials'
import Blogs from '../Blogs/Blogs'
import Doctors from '../Doctors/Doctors';
import Contact from '../Contact/Contact'
import Footer from '../../Shared/Footer/Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header/>
            <Service/>
            <FeatureOfService/>
            <Appoint/>
            <Testimonials/>
            <Blogs/>
            <Doctors/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;