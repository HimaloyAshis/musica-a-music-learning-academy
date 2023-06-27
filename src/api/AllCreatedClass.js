import React from 'react';
import useAuth from '../Hook/useAuth';
import { useQuery } from 'react-query';
import axios from 'axios';

const AllCreatedClass = () => {
    const {loading ,user } = useAuth()
    // const [axiosSecure ] = useAxiosSecure()

    const {data: AllClasses = [], refetch, isLoading} = useQuery({
        queryKey: ['AllClass', user?.email],
        enabled: !isLoading,
        queryFn: async ()=>{
            const res = await axios(`https://music-instrument-learning-server-himlaoy.vercel.app/class/instructor/${user?.email}`)
            console.log( 'all create class',res.data)
            return res.dada
        }

        
    })
    console.log( 'allClass crt',AllClasses)

    return {AllClasses, refetch}
};

export default AllCreatedClass;