
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from 'react-query';

const useInstructor = () => {
    const {user, loading} = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const {data: isInstructor, isLoading:isInstructorLoading }  = useQuery({
        queryKey:['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`)
            console.log(res.data)
            return res.data.Instructor
        }
    })

    return [isInstructor, isInstructorLoading]
};

export default useInstructor;