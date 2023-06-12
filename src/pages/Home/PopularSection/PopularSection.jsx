import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import PopularCard from './PopularCard';

const PopularSection = () => {
    const [popularClass, setPopularClass] = useState()
    console.log(popularClass)

    const {data: popular = []} = useQuery({
        queryKey:['popular'],
        queryFn: async()=>{
            const res = await axios.get('http://localhost:5000/class/booked')
            return res.data
        }
    })
    console.log(popular)

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
            {
               popular.map(pop=><PopularCard key={pop._id} pop={pop}></PopularCard> )
            }
        </div>
    );
};

export default PopularSection;