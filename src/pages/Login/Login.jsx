import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import SocialLogin from '../../SocialLogin/SocialLogin';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

const Login = () => {

    const {signInUser} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data.email, data.password)

        signInUser(data.email, data.password)
        .then(result=>{
            toast('LoggedIn successfully')
            navigate(from, {replace:true})
        })
        .catch(errors=> toast.error(errors.message))

    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Musica || Login Page </title>
            </Helmet>
            <ToastContainer></ToastContainer>
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
                        <span>Don't have an account ? please <Link to={'/signUp'} className='text-[#da769b]'>Sign Up</Link></span>
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;