import React from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AllclassTa = ({ AllClass, index }) => {


    const handleApprove = (id) => {
        const info = {
            status: 'Approve'
        };

        axios.patch(`http://localhost:5000/allClass/${id}`, info)
            .then(data => {
                console.log(data.data);
                if (data.data.modifiedCount > 0) {
                    // refetch()
                    toast('Status Approve');
                }
            });

    }
    const handleDeny = (id) => {
        const info = {
            status: 'Deny'
        };

        axios.patch(`http://localhost:5000/${id}`, info)
            .then(data => {
                console.log(data.data);
                if (data.data.modifiedCount > 0) {
                    // refetch()
                    toast('Status Denied');
                }
            });

    }

    const handleFeedBack = () => {

    }

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
                <td>{AllClass.seats}</td>
                <td>{AllClass.price}</td>
                <td>{AllClass.status}</td>
                <th>
                    <div className='py-2'>
                        <button onClick={() => handleApprove(AllClass._id)} className="btn btn-ghost bg-[#9BA4B5] btn-xs">Approve</button>
                        <button onClick={() => handleDeny(AllClass._id)} className="btn btn-ghost my-2 bg-[#9BA4B5] btn-xs">Deny</button>
                        <button onClick={() => handleFeedBack(AllClass._id,)} className="btn btn-ghost bg-[#9BA4B5] btn-xs">Feedback</button>
                    </div>
                </th>
            </tr>
        </>
    );
};

export default AllclassTa;