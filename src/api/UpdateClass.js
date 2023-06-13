import axios from "axios"

export const updateClass = async ({params}) => {
    const response = await fetch(`http://localhost:5000/dashboard/updateClass/${params.id}`)
    const data = await response.json()
    console.log(params.id)
    return data


//    await axios(`http://localhost:5000/dashboard/updateClass/${id}`)
//     .then(data=>{

//         return data.data
//     })
  }