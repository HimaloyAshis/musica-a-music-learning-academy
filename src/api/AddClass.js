import { data } from "autoprefixer"
import axios from "axios"

export const addClasses =  classes =>{
     axios.post(`https://music-instrument-learning-server-himlaoy.vercel.app/class`,classes)
     .then(data=>{

         console.log(data.data)
     })

     
     return data

    
}

// 