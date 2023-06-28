import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import useAllUser from '../../../Hook/useAllUser';
import AllUserTable from './AllUserTable';
import { Helmet } from 'react-helmet';

const AllUser = () => {

   const [allUser] = useAllUser()
   console.log(allUser)
    
    return (
        <div className="overflow-x-auto">
            <Helmet>
                <title>Musica || Dashboard || All user Page </title>
            </Helmet>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Make Admin</th>
                        <th>Make Instructors</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        allUser.map((users, index)=><AllUserTable key={users._id} users={users} index={index}></AllUserTable> )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUser;