import React from 'react';
import { ToastContainer } from 'react-toastify';
import GetClass from '../../../api/GetClass';
import CreatedClassTab from './CreatedClassTab';

const CreatedClass = () => {

    const [AllClass] = GetClass()
    console.log(AllClass)

    return (
        <div className="overflow-x-auto">
            <ToastContainer></ToastContainer>
            <table className="table">
                {/* head */}
                <thead>
                    <tr className=''>
                        <th>
                            #
                        </th>
                        <th>Picture</th>
                        <th>class Name</th>
                        <th>Instructor name</th>
                        <th>Instructor email</th>
                        <th>Available seats</th>
                        <th>Feedback </th>
                        <th>Status </th>
                        <th>Action </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        AllClass?.map((cls, index) => <CreatedClassTab key={cls._id} AllClass={cls} index={index}></CreatedClassTab>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default CreatedClass;