import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import PopularInstructorCard from './PopularInstructorCard';
import { FaMusic } from 'react-icons/fa';

const PopularInstructor = () => {

    const { data: user = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/user/popular')
            console.log(res.data)
            return res.data
        }
    })

    console.log(user)
    return (
        <div className='py-14'>
            <FaMusic></FaMusic>
            <h1 className='font-extrabold text-4xl text-center text-[#]'>Here are all famous instructor in Musica</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 py-6'>
                {
                    user.map(pop => <PopularInstructorCard key={pop._id} pop={pop}></PopularInstructorCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;