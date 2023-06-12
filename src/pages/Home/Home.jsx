import React from 'react';
import Slider from './Slider/Slider';
import PopularSection from './PopularSection/PopularSection';

const Home = () => {
    return (
        <div className='bg-[#E5F9DB]'>
            <Slider></Slider>
            <PopularSection></PopularSection>
        </div>
    );
};

export default Home;