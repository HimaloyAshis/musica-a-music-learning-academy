
import useAuth from './useAuth';
import { useQuery } from 'react-query';
import axios from 'axios';

const useSelectedClass = () => {
    const {loading, user} = useAuth()

    const { data: selectedClass = [] } = useQuery({
        queryKey: ['favClass'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`https://music-instrument-learning-server-himlaoy.vercel.app/student/favClass/${user?.email}`)
            console.log(selectedClass)
            return res.data
        }
    })

    return [selectedClass]
};

export default useSelectedClass;