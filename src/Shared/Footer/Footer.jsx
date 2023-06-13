import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 h-72 lg:grid-cols-3 gap-3 py-4 px-5 bg-[#0B2447] w-'>
            <div className='text-white'>
                <p>Musica Academy</p>
                <p>please Subscribe</p>
                <div className='flex gap-2 py-2'>
                    <input type="email" className='rounded' name="" id="" />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className='text-white'>
                <p>Policy and privacy</p>
                <p>&copy; All Rights are reserved</p>
            </div>
            <div className='text-white'>
                <p>Contact With Us</p>
                <p>Gulshan, Round Square, 45/2A</p>
                <p>Dhaka, Bangladesh.</p>
                <br />
                <div className='flex items-center text-white '>
                    <FaInstagram className='w-10 h-8 text-red-500'></FaInstagram>
                    <FaFacebook className='w-10 h-8 text-blue-400'></FaFacebook>
                    <FaLinkedin className='w-10 h-8 text-blue-400'></FaLinkedin>

                </div>
            </div>

        </div>
    );
};

export default Footer;