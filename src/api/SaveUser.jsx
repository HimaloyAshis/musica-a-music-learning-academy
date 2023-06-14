import axios from 'axios';

const SaveUser = user => {
    const currentUser = {
        email: user.email,
        name: user.displayName,
        image: user.photoURL,
        role:'student'
    }

    axios.put(`https://music-instrument-learning-server-himlaoy.vercel.app/users/${user?.email}`, currentUser)
        .then(data => {
            console.log(data)
        })
        .catch(error => console.log(error.message))

};

export default SaveUser;



export const MakeAdmin = (user) => {
    const currentUser = {
        role: 'Admin',
    }

    axios.put(`https://music-instrument-learning-server-himlaoy.vercel.app/users/${user?.email}`, currentUser)
        .then(data => {
            console.log(data.data)
        })
        .catch(error => console.log(error.message))

}



export const MakeInstructor = (user) => {

    const currentUser = {
        role: 'Instructor',
    }

    axios.put(`https://music-instrument-learning-server-himlaoy.vercel.app/users/${user?.email}`, currentUser)
        .then(data => {
            console.log(data.data)
        })
        .catch(error => console.log(error.message))

}