import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const CreatedClassTab = ({ AllClass, index }) => {
    return (
        <>
            <ToastContainer></ToastContainer>
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
                <td>{AllClass.availableSeats}</td>
                <td></td>
                <td>{AllClass.status}</td>
                <th>
                    <div className='py-2'>
                        {/* <button disabled={AllClass.status === 'Approve'} onClick={() => handleApprove(AllClass._id)} className="btn btn-ghost bg-[#9BA4B5] btn-xs">Approve</button>
                        <button disabled={AllClass.status === 'Approve'} onClick={() => handleDeny(AllClass._id)} className="btn btn-ghost my-2 bg-[#9BA4B5] btn-xs">Deny</button>
                        <button onClick={() => handleFeedBack(AllClass._id,)} className="btn btn-ghost bg-[#9BA4B5] btn-xs">Feedback</button> */}
                        <Link to={`/dashboard/updateClass/${AllClass._id}`} className='butn'>update</Link >
                    </div>
                </th>
            </tr>
        </>
    );
};

export default CreatedClassTab;