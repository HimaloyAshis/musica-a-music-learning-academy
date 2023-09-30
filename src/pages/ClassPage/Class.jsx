import React from 'react';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import { useQuery } from 'react-query';

import ClassCard from './ClassCard';
import useAuth from '../../Hook/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; import { Helmet } from 'react-helmet';

const Class = () => {

    const { loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { data: allClasses } = useQuery({
        queryKey: ['allClasses'],
        queryFn: async () => {
            const res = await fetch('https://music-instrument-learning-server-himlaoy.vercel.app/approve/class')

            console.log(res)
            return res.json()

        }


    })

    // axios.get('https://music-instrument-learning-server-himlaoy.vercel.app/class')
    // .then(data=>{
    //     console.log(data)
    // })

    console.log(allClasses)

    if (!allClasses) {
        return <div>Loading...</div>; // or any other loading indicator
    }

    return (
        <div className='bg-[#164B60]'>
            <ToastContainer></ToastContainer>
            <Helmet>
                <title>Musica | Class Page </title>
            </Helmet>
            <h1 className='text-center font-extrabold text-5xl text-[#5baeba] py-6' data-aos="fade-left">Here is all class we provide</h1>
            <hr className='border-2 border-b-gray-200 w-2/3 m-auto'/>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10' >
                {
                    allClasses.map(classes => <ClassCard key={classes._id} classes={classes}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default Class;