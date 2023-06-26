
import useAuth from './useAuth';
import { useQuery } from 'react-query';
import axios from 'axios';

const useSelectedClass = async ({params}) => {
    
        const response = await fetch(`https://music-instrument-learning-server-himlaoy.vercel.app/dashboard/payment/${params.id}`)
        const data = await response.json()
        console.log(params.id)
        return data
};

export default useSelectedClass;