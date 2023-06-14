import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hook/useAuth';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'sweetalert2/src/sweetalert2.scss'


const UpdateCreateClass = () => {
    const {user} = useAuth()

    const ClassData = useLoaderData()
    console.log(ClassData)
    const {Instructor_Email,Instructor_Name,availableSeats,class_Image,class_Name,price,status,_id} = ClassData

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // addClasses(data)
        console.log(data)

        axios.put(`https://music-instrument-learning-server-himlaoy.vercel.app/selected/class/${_id}`, data)
                .then(data => {
                    console.log(data.data)
                    toast(' Class updated')
                })
                .catch(error => toast(error.message))

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='gap-5 text-center py-3'>

            <ToastContainer></ToastContainer>
            <input type="text" placeholder="Class Name" className="input m-3 input-bordered input-accent w-full max-w-xs" defaultValue={class_Name} {...register("class_Name", {required:true})} />

            <input type="URL" placeholder="class image" className="input m-3 input-bordered input-accent w-full max-w-xs" defaultValue={class_Image} {...register("class_Image", {required:true})} />

            <input type="text" placeholder="Instructor Name" className="input m-3 input-bordered input-accent w-full max-w-xs" defaultValue={Instructor_Name} {...register("Instructor_Name")} />

            <input type="email" placeholder="email" className="input m-3 input-bordered input-accent w-full max-w-xs" defaultValue={Instructor_Email} {...register("Instructor_Email")} />

            <input type="number" placeholder="Available Seats" className="input m-3 input-bordered input-accent w-full max-w-xs" defaultValue={availableSeats} {...register("availableSeats")} />
            <input type="number" placeholder="Price" className="input m-3 input-bordered input-accent w-full max-w-xs" defaultValue={price} {...register("price")} />

            <select type="text" placeholder="Type here" className="input m-3 input-bordered input-accent w-full max-w-lg" {...register("status")}>
                <option value="pending">pending</option>
                <option value="Approve">Approve</option>
                <option value="Deny">Deny</option>
                
            </select>
            <div className='text-center'>
                <input className="btn w-3/4" type="submit" value={'Add class'} />
            </div>
        </form>
    );
};

export default UpdateCreateClass;