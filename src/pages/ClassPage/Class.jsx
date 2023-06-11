import React from 'react';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import { useQuery } from 'react-query';

import ClassCard from './ClassCard';
import useAuth from '../../Hook/useAuth';

const Class = () => {

    const {loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { data: classes } = useQuery({
        queryKey: ['AllClass'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('/class')
            // console.log(res.data)
            return res.data
        }
        
    
    }) 
        
    console.log(classes)

    if (!classes) {
        return <div>Loading...</div>; // or any other loading indicator
      }

    return (
        <div>
            <h1 className='text-center font-extrabold text-4xl text-[#606C5D] py-6'>Here is all class we provide</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 my-10'>
                {
                    classes.map(classes => <ClassCard key={classes._id} classes={classes}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default Class;