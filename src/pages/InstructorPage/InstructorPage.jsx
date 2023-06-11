import React from 'react';
import { useQuery } from 'react-query';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import InstructorCard from './InstructorCard';

const InstructorPage = () => {

    const [axiosSecure] = useAxiosSecure()

    const {data:instructors} = useQuery({
        queryKey:['AllClass'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/class')
            // console.log(res.data)
            return res.data
        }
    })

    console.log(instructors)

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3'>
            {
                instructors.map(instructor=> <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
            }
        </div>
    );
};

export default InstructorPage;