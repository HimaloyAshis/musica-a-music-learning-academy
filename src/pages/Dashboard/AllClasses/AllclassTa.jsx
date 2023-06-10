import React from 'react';
import { Approve, Deny } from '../../../api/ClassStatus';



const AllclassTa = ({ AllClass, index }) => {


    const handleApprove = (id ) =>{
        Approve(id)

    }
    const handleDeny = (id ) =>{
        Deny(id)

    }

    const handleFeedBack = ()=>{

    }

    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={AllClass.class_Image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {AllClass.class_Name}
            </td>
            <td>{AllClass.Instructor_Name}</td>
            <td>{AllClass.Instructor_Email}</td>
            <td>{AllClass.seats}</td>
            <td>{AllClass.price}</td>
            <td>{AllClass.status}</td>
            <th>
                <div className='py-2'>
                    <button onClick={()=>handleApprove(AllClass._id)} className="btn btn-ghost bg-[#9BA4B5] btn-xs">Approve</button>
                    <button onClick={()=>handleDeny(AllClass._id)} className="btn btn-ghost my-2 bg-[#9BA4B5] btn-xs">Deny</button>
                    <button onClick={()=>handleFeedBack(AllClass._id,)} className="btn btn-ghost bg-[#9BA4B5] btn-xs">Feedback</button>
                </div>
            </th>
        </tr>
    );
};

export default AllclassTa;