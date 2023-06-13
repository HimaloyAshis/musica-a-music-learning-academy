import React from 'react';
import { useQuery } from 'react-query';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import InstructorCard from './InstructorCard';
import useAuth from '../../Hook/useAuth';
import useAllUser from '../../Hook/useAllUser';
import axios from 'axios';

const InstructorPage = () => {
    const {loading}  = useAuth()

    const [axiosSecure] = useAxiosSecure()

    const { data: instructors = [] } = useQuery({
        queryKey: ['AllUser'],
        // enabled: !loading,
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/instructor')
            console.log(res.data)
            return res.data
        }
    })

    console.log(instructors)



    // const [allUser] = useAllUser()
    // console.log(allUser)

    return (
        <div>
            <h1 className='text-center font-extrabold text-4xl text-[#606C5D] py-6'>Here is all class we provide</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 my-10'>
                {
                    instructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default InstructorPage;