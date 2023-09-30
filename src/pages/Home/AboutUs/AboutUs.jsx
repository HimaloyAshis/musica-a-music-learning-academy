import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className='About py-8' data-aos="zoom-in-down" data-aos-duration="3000">
            <h1 className='text-3xl font-extrabold text-center pt-5 text-white' data-aos="fade-up"
                data-aos-duration="3000">Why Choose US</h1>
            <div className='w-2/3 mx-auto my-5' data-aos="fade-up"
                data-aos-duration="3000">
                <p className='text-[#B7B7B7] font-bold lg:text-xl'>Welcome to Musica, a leading music instrument learning school dedicated to nurturing a love for music in students of all ages. With a team of experienced instructors, we offer a wide variety of instrument classes, including piano, guitar, violin, drums, flute, and saxophone. Our comprehensive curriculum focuses on technique, theory, and musical expression, fostering both skill development and creativity. Whether you're a beginner or an advanced player, our supportive and inclusive environment will help you unleash your musical potential. Join Musica and embark on a transformative musical adventure that will inspire and enrich your life.</p>
            </div>
            <div className='w-2/3 mx-auto my-6 ' data-aos="fade-up"
                data-aos-duration="3000">
                <button className="btn btn-outline text-center text-white">Let's Know More</button>
            </div>
        </div>
    );
};

export default AboutUs;