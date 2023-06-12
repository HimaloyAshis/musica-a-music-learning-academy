import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import useAuth from '../../../Hook/useAuth';

const AllSelectedClassySt = () => {

    const {user, loading} = useAuth()

    const { data: favClass = [] } = useQuery({
        queryKey: ['favClass'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/student/favClass/${user?.email}`)
            return res.data
        }
    })

    console.log(favClass)

    return (
        <div>
            
        </div>
    );
};

export default AllSelectedClassySt;