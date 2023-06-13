import axios from 'axios';
import { parse } from 'postcss';
import React from 'react';
import { toast } from 'react-toastify';
import useAuth from '../../Hook/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const ClassCard = ({ classes }) => {

    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const { class_Image, class_Name, price, Instructor_Name, availableSeats, booked, } = classes

    let availAbleSeat = booked || 0
    const handleAvailableSeats = (id) => {


        if (user && user?.email) {
            const availAbleSeats = {

                availableSeats: parseInt(availableSeats) - 1,
                booked: availAbleSeat + 1
            }

            axios.put(`http://localhost:5000/selected/class/${id}`, availAbleSeats)
                .then(data => {
                    console.log(data.data)
                    toast('Your favorite class added')
                })
                .catch(error => toast(error.message))
                
            const classInfo = {
                class_Image,
                class_Name,
                Instructor_Name,
                email:user?.email,
                price
            }

            axios.post(`http://localhost:5000/students`, classInfo)
                .then(data => {
                    if (data.insertedId > 0) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your Favorite class selected',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login to order the food',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {

                    navigate('/login', { state: { from: location } })
                }
            })
        }


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
                    <button onClick={() => handleAvailableSeats(classes._id)} className="btn  bg-[#829797]">Select Class</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;