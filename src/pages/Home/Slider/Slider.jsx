import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Slider.css'

const Slider = () => {
    return (
        <Carousel className='text-[#B7B7B7]'>

            <div className='img1'>
                <p className=' text-3xl pt-8'>Learn Piano efficiently, that will take you to your goal.</p>
                <br />
                <p className='text-3xl '> Don't miss enrol in our Class.</p>
            </div>

            <div className='img2'>
                <p className=' text-3xl pt-8'>Learn Piano efficiently, that will take you to your goal.</p>
                <br />
                <p className='text-3xl '> Don't miss enrol in our Class.</p>

            </div>

            <div className='img3'>
                <p className=' text-3xl pt-8'>Learn Piano efficiently, that will take you to your goal.</p>
                <br />
                <p className='text-3xl '> Don't miss enrol in our Class.</p>
            </div>

            <div className='img4'>
                <p className=' text-3xl pt-8'>Learn Piano efficiently, that will take you to your goal.</p>
                <br />
                <p className='text-3xl '> Don't miss enrol in our Class.</p>
            </div>
        </Carousel>
    );
};

export default Slider;