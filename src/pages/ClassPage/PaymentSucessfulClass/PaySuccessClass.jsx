import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import useAuth from '../../../Hook/useAuth';
import PaySuccessClassCard from './PaySuccessClassCard';
import { Helmet } from 'react-helmet';

const PaySuccessClass = () => {
    const { loading, user } = useAuth()

    const { data: PaySuccess = [] } = useQuery({
        queryKey: ['PaySuccess', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios(`https://music-instrument-learning-server-himlaoy.vercel.app/paySuccess/class/${user?.email}`)
            // console.log(res.data)
            return res.data
        }
    })

    // console.log(PaySuccess)


    return (
        <div className="overflow-x-auto ">
            <Helmet>
                <title>Musica | Dashboard Payment Success Class Page </title>
            </Helmet>
            <table className="table ">
                {/* head */}
                <thead>
                    <tr className=''>
                        <th>
                            #
                        </th>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        PaySuccess.map((favorite, index) => <PaySuccessClassCard
                            key={favorite._id}
                            favClass={favorite}
                            index={index}
                        // allTotal={allTotal}
                        ></PaySuccessClassCard>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default PaySuccessClass;