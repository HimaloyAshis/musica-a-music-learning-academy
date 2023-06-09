import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex">
                <div className="text-center lg:text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-orange-400'>email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
                            {errors.password && <span className='text-orange-400'>email is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-[#C2DEDC]" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className='p-3'>
                        <span>Don't have an account ? please <Link to={'/signUp'} className='text-[#FFAAC9]'>Sign Up</Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;