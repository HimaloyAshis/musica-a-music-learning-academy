import React from 'react';
import useAuth from '../../../Hook/useAuth';
import { MakeAdmin } from '../../../api/SaveUser';

const AllUserTable = ({users, index}) => {

    const {user} = useAuth()

    const Admin = (user) =>{
        MakeAdmin(user)
    }

    const Instructor = ()=>{
        
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
                            <img src={users.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {users.name}
            </td>
            <td>
                <button onClick={()=>Admin(users)} className="btn btn-ghost butn btn-xs">Make Admin</button>
            </td>
            <th>
                <button onClick={()=>Instructor(users)} className="btn btn-ghost butn btn-xs">Make Instructors</button>
            </th>
        </tr>
    );
};

export default AllUserTable;