import React from 'react';

const PaySuccessClassCard = ({ favClass, index }) => {
    const {favClassName,class_Image, price, prices} = favClass
    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                 <img  src={class_Image} alt="Avatar Tailwind CSS Component" />
                            }
                            
                        </div>
                    </div>
                </div>
            </td>
            <td className=''>
                {favClassName}
            </td>
           
            <th>
                {/* {prices.map(price=> <p key={price}>{price}</p> )} */}
            </th>
            <td>${price}</td>
        </tr>
    );
};

export default PaySuccessClassCard;