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
    const total = favClass?.reduce((sum, item) => parseInt(item.price) + sum, 0)
    const inTotal = parseFloat(total)
    const allTotal = inTotal.toFixed(2)
    console.log(allTotal)

    return (
        <div className="overflow-x-auto">
            <div>
                <p className='text-3xl font-bold text-center text-[#8BACAA]'>Total price : $ {allTotal}</p>
            </div>
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
                    favClass.map((favorite, index)=> <AllSelectClassDashCard 
                    key={favorite._id} 
                    favClass={favorite} 
                    index={index}
                    // allTotal={allTotal}
                    ></AllSelectClassDashCard>)
                   }
                </tbody>
            </table>
        </div>
    );
};

export default AllSelectedClassySt;