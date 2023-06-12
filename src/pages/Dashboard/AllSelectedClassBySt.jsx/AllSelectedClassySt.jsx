import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import useAuth from '../../../Hook/useAuth';
import AllSelectClassDashCard from './AllSelectClassDashCard';

const AllSelectedClassySt = () => {

    const { user, loading } = useAuth()

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
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    favClass.map((favorite, index)=> <AllSelectClassDashCard key={favorite._id} favClass={favorite} index={index}></AllSelectClassDashCard>)
                   }
                </tbody>
            </table>
        </div>
    );
};

export default AllSelectedClassySt;