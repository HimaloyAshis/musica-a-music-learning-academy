import React from 'react';
import Slider from './Slider/Slider';
import PopularSection from './PopularSection/PopularSection';
import PopularInstructor from './PopularInstructor.jsx/PopularInstructor';
import AboutUs from './AboutUs/AboutUs';
const Home = () => {
    return (
        <div className='bg-[#164B60]'>
            <Slider></Slider>
            <PopularSection></PopularSection>
            <PopularInstructor></PopularInstructor>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;