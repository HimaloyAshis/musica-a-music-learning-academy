import axios from 'axios';

const SaveUser = user => {
    const currentUser = {
        email:user.email,
        name:user.displayName,
        image:user.photoURL
    }

    axios.put(`http://localhost:5000/users/${user?.email}`, currentUser)
    .then(data=>{
        console.log(data)
    })
    .catch(error=>console.log(error.message))
    
};

export default SaveUser;