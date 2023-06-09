import React from 'react';
import useAuth from '../Hook/useAuth';
import { FaGoogle } from 'react-icons/fa';
import SaveUser from '../api/SaveUser';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { gProvider } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state.from.pathname || '/'

    const handleGoogle = ()=>{
        gProvider()
        .then(result=>{
            SaveUser(result.user)
            toast.success('Sign In successfully')
        })
        .catch(error=>toast.error(error.message))
    }

    return (
        <div>
            <div className="divider">OR</div>
            <button onClick={handleGoogle} className="btn btn-circle">
               <FaGoogle></FaGoogle>
            </button>
        </div>
    );
};

export default SocialLogin;