import React from 'react';
import GetClass from '../../../api/GetClass';

const AllClasses = () => {
    const [AllClass] = GetClass()
    console.log(AllClass)


    return (
        <div>
            <h1>Here is All class </h1>
        </div>
    );
};

export default AllClasses;