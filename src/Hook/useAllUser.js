import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const useAllUser = () => {
    const {data: allUser= [], refetch, isLoading:loading} = useQuery({
        queryKey:['allUser'],
        queryFn: async ()=>{
            const res = await axios.get('http://localhost:5000/allUser')
        }

    })

    return [allUser, refetch, loading, ]
};

export default useAllUser;