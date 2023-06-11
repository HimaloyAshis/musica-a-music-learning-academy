import axios from 'axios';
import { parse } from 'postcss';
import React from 'react';
import { toast } from 'react-toastify';
import useAuth from '../../Hook/useAuth';

const ClassCard = ({classes}) => {

    const {user} = useAuth()

    const {class_Image,class_Name,price,Instructor_Name,availableSeats,allSeat, booked,} = classes


    let availAbleSeat = booked || 0
    const handleAvailableSeats = (id) =>{

        const availAbleSeats ={
           
            availableSeats: parseInt(availableSeats) -1,
            booked: availAbleSeat +1
        }


        axios.put(`http://localhost:5000/selected/class/${id}`,availAbleSeats)
        .then(data=>{
            console.log(data.data)
            toast('Your favorite class added')
        })
        .catch(error=>toast(error.message))

        
    }


    return (
        <div className="card w-96 py-6 bg-[#EEE2DE] shadow-xl">
            <figure className="px-10 pt-10">
                <img src={class_Image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body  py-2">
                <h2 className="card-title">Class_Name: {class_Name}</h2>
                <p>Instructor_Name: {Instructor_Name}</p>
                <p>AvailableSeats: {availableSeats}</p>
                <p>price: $ {price}</p>
                <div className="card-actions">
                    <button onClick={()=>handleAvailableSeats(classes._id)} className="btn  bg-[#829797]">Select Class</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;