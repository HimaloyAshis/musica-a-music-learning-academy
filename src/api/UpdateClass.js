import axios from "axios"

export const updateClass = async ({params}) => {
    const response = await fetch(`https://music-instrument-learning-server-himlaoy.vercel.app/dashboard/updateClass/${params.id}`)
    const data = await response.json()
    console.log(params.id)
    return data


//    await axios(`https://music-instrument-learning-server-himlaoy.vercel.app/dashboard/updateClass/${id}`)
//     .then(data=>{

//         return data.data
//     })
  }