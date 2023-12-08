import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import PopularCard from './PopularCard';
import { Helmet } from 'react-helmet';

const PopularSection = () => {


    const { data: popular = [] } = useQuery({
        queryKey: ['popular'],
        queryFn: async () => {
            const res = await axios.get('https://music-instrument-learning-server-himlaoy.vercel.app/class/booked')
            return res.data
        }
    })
    // console.log(popular)

    return (
        <div className='py-10' data-aos="fade-right"
        data-aos-duration="2000">
            <Helmet>
                <title>Musica || Home </title>
            </Helmet>
            <h1 className='font-extrabold text-4xl text-center pb-4 text-[#42a1b0]'>Here are the most trending class in Musica</h1>
            <hr className='w-2/3 border-2 border-b-gray-200 mx-auto mb-4'/>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6'>
                {
                    popular.map(pop => <PopularCard key={pop._id} pop={pop}></PopularCard>)
                }
            </div>
        </div>
    );
};

export default PopularSection;