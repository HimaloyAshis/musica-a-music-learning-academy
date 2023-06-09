import { data } from "autoprefixer"
import axios from "axios"

export const addClasses =  classes =>{
     axios.post(`${import.meta.env.Vite_API_URL}/class`,classes)
     .then(data=>{

         console.log(data)
     })

     
     return data

    
}

// 