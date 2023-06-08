import React, { createContext, useState } from 'react';
import app from '../../Firebase/Firebase';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [loading , setLoading]  = useState(true)

    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }


    const userInfo = {
        loading,
        logOut,
        createUser,
        signInUser,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;