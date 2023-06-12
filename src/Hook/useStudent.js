import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from 'react-query';

const useStudent = () => {
    const {user, loading} = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const {data: isStudent, isLoading:isStudentLoading }  = useQuery({
        queryKey:['isStudent', user?.email],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/students/${user?.email}`)
            console.log(res.data)
            return res.data.student
        }
    })

    return [isStudent, isStudentLoading]
};

export default useStudent;