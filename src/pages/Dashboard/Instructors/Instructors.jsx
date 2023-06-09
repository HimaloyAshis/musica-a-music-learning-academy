import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hook/useAuth';

const Instructors = () => {

    const {user} = useAuth()

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    // data.class_Name, data.class_Image, data.Instructor_Name, data.Instructor_Email, data.seats, data.price, data.status

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='gap-5 text-center py-3'>

            <input type="text" placeholder="Class Name" className="input m-3 input-bordered input-accent w-full max-w-xs" {...register("class_Name", {required:true})} />

            <input type="URL" placeholder="class image" className="input m-3 input-bordered input-accent w-full max-w-xs" {...register("class_Image", {required:true})} />

            <input type="text" placeholder="Instructor Name" className="input m-3 input-bordered input-accent w-full max-w-xs" defaultValue={user?.displayName} {...register("Instructor_Name")} />

            <input type="email" placeholder="email" className="input m-3 input-bordered input-accent w-full max-w-xs" defaultValue={user?.email} {...register("Instructor_Email")} />

            <input type="number" placeholder="Available Seats" className="input m-3 input-bordered input-accent w-full max-w-xs" {...register("seats")} />
            <input type="number" placeholder="Price" className="input m-3 input-bordered input-accent w-full max-w-xs" {...register("price")} />

            <select type="text" placeholder="Type here" className="input m-3 input-bordered input-accent w-full max-w-lg" {...register("status")}>
                <option value="pending">pending</option>
                
            </select>
            <div className='text-center'>
                <input className="btn w-3/4" type="submit" value={'Add class'} />
            </div>
        </form>
    );
};

export default Instructors;