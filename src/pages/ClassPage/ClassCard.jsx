import axios from 'axios';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import useAuth from '../../Hook/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import useInstructor from '../../Hook/useInstructor';
import useAdmin from '../../Hook/useAdmin';


const ClassCard = ({ classes }) => {

    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const [isInstructor]= useInstructor()
    const [isAdmin] = useAdmin()
    const { class_Image, class_Name, price, Instructor_Name, availableSeats, booked, } = classes

    let availAbleSeat = booked || 0
    const handleAvailableSeats = (id) => {


        if (user && user?.email) {
            const availAbleSeats = {

                availableSeats: parseInt(availableSeats) - 1,
                booked: availAbleSeat + 1
            }

            axios.put(`https://music-instrument-learning-server-himlaoy.vercel.app/selected/class/${id}`, availAbleSeats)
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

            axios.post(`https://music-instrument-learning-server-himlaoy.vercel.app/students`, classInfo)
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
        <div className={`card w-96 py-6  shadow-xl ${parseInt(availableSeats) === 0 ? `bg-red-500`: `bg-[#EEE2DE]`}`} data-aos="flip-left">
            <ToastContainer></ToastContainer>
            <figure className="px-10 pt-10">
                <img src={class_Image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body  py-2">
                <h2 className="card-title">Class_Name: {class_Name}</h2>
                <p>Instructor_Name: {Instructor_Name}</p>
                <p>AvailableSeats: {availableSeats}</p>
                <p>price: $ {price}</p>
                <div className="card-actions">
                    <button disabled={availableSeats=== 0 || isAdmin|| isInstructor } onClick={() => handleAvailableSeats(classes._id)} className="btn  bg-[#829797]">Select Class</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;