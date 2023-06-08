import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Slider.css'

const Slider = () => {
    return (
        <Carousel className='text-[#B7B7B7]'>

            <div className='img1'>
                <p className=' text-3xl pt-8 font-bold'>Learn Piano efficiently, to make your goal come true.</p>
                <br />
                <p className='text-3xl font-bold'> Don't miss, Enrol in our Class.</p>
            </div>

            <div className='img2'>
                <p className=' text-3xl pt-8 font-bold'>Learn DJ efficiently, to make your goal come true.</p>
                <br />
                <p className='text-3xl font-bold'> Don't miss, Enrol in our Class.</p>

            </div>

            <div className='img3'>
                <p className=' text-3xl pt-8 font-bold'>Learn Guitar efficiently, to make your goal come true.</p>
                <br />
                <p className='text-3xl font-bold'> Don't miss, Enrol in our Class.</p>
            </div>

            <div className='img4'>
                <p className=' text-3xl pt-8 font-bold'>Learn Dram efficiently, to make your goal come true.</p>
                <br />
                <p className='text-3xl font-bold'> Don't miss, Enrol in our Class.</p>
            </div>
        </Carousel>
    );
};

export default Slider;