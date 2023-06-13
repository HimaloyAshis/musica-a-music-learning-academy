import axios from 'axios';
import { useQuery } from 'react-query';
import useAuth from './useAuth';

const useAllUser = () => {

    const {loading} = useAuth()

    const {data: allUser= [], refetch, isLoading:loadings} = useQuery({
        queryKey:['allUser'],
        // enabled: !loading,
        queryFn: async ()=>{
            const res = await axios('http://localhost:5000/allUsers')
            console.log(res.data)
            return res.data
            
        }
    })

    return [allUser, refetch, loadings, ]
};

export default useAllUser;