import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SaveUser from '../../api/SaveUser';
import useAuth from '../../Hook/useAuth';
import { toast } from 'react-toastify';

const SignUp = () => {
    const [error, setError] = useState()
    const { createUser, updateUser } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state.from.pathname || '/'

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data.name, data.email, data.photo, data.password, data.confirmPassword)
        if (data.password !== data.confirmPassword) {
            setError(<span className='text-orange-400'>Confirm Passwords not matched</span>)
            return
        }
        createUser(data.email, data.password)
            .then(result => {
                updateUser(data.name, data.photo)
                    .then(() => {

                        SaveUser(result.user)
                        toast.success('LoggedIn successfully')
                        navigate(from, {replace:true})
                    })
                    .catch(error=>toast(error.message))

            })
            .catch(error=>toast.error(error.message))
    };

    return (
        <div className="hero min-h-screen bg-base-200 py-5">
            <div className="hero-content flex-col lg:flex">
                <div className="text-center lg:text-center">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"  {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className='text-orange-400'>Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"  {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-orange-400'>email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="URL" {...register("photo", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                            {errors.photo && <span className='text-orange-400'>photo URL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 10,
                                pattern: /(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/
                            })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <span className='text-orange-400'>Password is required</span>}
                            {errors.password?.type === 'minLength' && <span className='text-orange-400'>Password length will be more than 6 character</span>}
                            {errors.password?.type === 'maxLength' && <span className='text-orange-400'>Password length will be less than 10 character</span>}
                            {errors.password?.type === 'pattern' && <span className='text-orange-400'>Password must have one uppercase , one lowercase and one special character</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" {...register("confirmPassword", { required: true })} placeholder="password" className="input input-bordered" />
                            {errors.confirmPassword && <span className='text-orange-400'>Confirm Passwords is required</span>}
                            <span className='text-orange-400'>{error}</span>

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-[#C2DEDC]" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className='p-3'>
                        <span>Already have an account ? please <Link to={'/login'} className='text-[#FFAAC9]'>Login</Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;