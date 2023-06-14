import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const PaymentHistory = () => {

    const { data: PayInOrderTime = [] } = useQuery({
        queryKey: ['PayInOrderTime'],
        // enabled: !loading,
        queryFn: async () => {
            const res = await axios(`http://localhost:5000/paySuccess/AllClass`)
            // console.log(res.data)
            return res.data
        }
    })

    console.log(PayInOrderTime)

    return (
        <div className="overflow-x-auto ">

            <table className="table ">
                {/* head */}
                <thead>
                    <tr className=''>
                        <th>
                            #
                        </th>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Total Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        PayInOrderTime.map((favorite, index) =>
                            <>
                                <tr>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    {
                                                        favorite.class_Image.map(image => <img key={image} src={image} alt="Avatar Tailwind CSS Component" />)
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className=''>
                                        {favorite.favClassName.map(className => <p key={className}>.{className}</p>)}
                                    </td>

                                    <th>
                                        {/* {prices.map(price=> <p key={price}>{price}</p> )} */}
                                    </th>
                                    <td> ${favorite.price}</td>
                                </tr>
                            </>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default PaymentHistory;