import React from 'react';
import { useQuery } from 'react-query';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import InstructorCard from './InstructorCard';
import useAuth from '../../Hook/useAuth';
import useAllUser from '../../Hook/useAllUser';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const InstructorPage = () => {
    const {loading}  = useAuth()

    const [axiosSecure] = useAxiosSecure()

    const { data: instructors = [] } = useQuery({
        queryKey: ['AllUser'],
        // enabled: !loading,
        queryFn: async () => {
            const res = await axios.get('https://music-instrument-learning-server-himlaoy.vercel.app/instructor')
            console.log(res.data)
            return res.data
        }
    })

    console.log(instructors)



    // const [allUser] = useAllUser()
    // console.log(allUser)

    return (
        <div className='bg-[#164B60]'>
             <Helmet>
                <title>Musica || Instructors Page </title>
            </Helmet>
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