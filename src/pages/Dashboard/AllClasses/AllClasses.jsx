import React from 'react';
import GetClass from '../../../api/GetClass';
import AllclassTa from './AllclassTa';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';

const AllClasses = () => {
    const [AllClass] = GetClass()
    console.log(AllClass)


    return (
        <div className="overflow-x-auto text-[rgb(21,47,58)]">
            <Helmet>
                <title>Musica || Dashboard || Created All Class Page </title>
            </Helmet>
            <ToastContainer></ToastContainer>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                           #
                        </th>
                        <th>Picture</th>
                        <th>class Name</th>
                        <th>Instructor name</th>
                        <th>Instructor email</th>
                        <th>Available seats</th>
                        <th>Price </th>
                        <th>Status </th>
                        <th>Action </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        AllClass?.map((cls, index)=> <AllclassTa key={cls._id} AllClass={cls} index={index}></AllclassTa>)
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default AllClasses;