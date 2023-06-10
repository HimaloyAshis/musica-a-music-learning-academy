import { data } from "autoprefixer"
import axios from "axios"

export const addClasses =  classes =>{
     axios.post(`http://localhost:5000/class`,classes)
     .then(data=>{

         console.log(data.data)
     })

     
     return data

    
}

// 