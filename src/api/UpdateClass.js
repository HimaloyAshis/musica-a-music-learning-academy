import axios from "axios"

export const updateClass = async id => {
    const response = await fetch(`http://localhost:5000/dashboard/updateClass/${id}`)
    const data = await response.json()
    console.log(id)


//    await axios(`http://localhost:5000/dashboard/updateClass/${id}`)
//     .then(data=>{

//         return data.data
//     })
  }