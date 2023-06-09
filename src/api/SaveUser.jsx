import React from 'react';

const SaveUser = user => {
    const currentUser = {
        email:user.email
    }

    fetch(`http://localhost:5000/users/${user?.email}`, {
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(currentUser)
    })
    .then(res=>res.json())
    .then(data=>data)
};

export default SaveUser;