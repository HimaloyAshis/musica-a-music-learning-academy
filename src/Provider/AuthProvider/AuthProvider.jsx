import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/Firebase';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from 'axios';


export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, url) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: url
        })
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const gProvider = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

            console.log('Here is current User', currentUser)
            if (currentUser) {
                const user = { email: currentUser?.email }
                axios.post('https://music-instrument-learning-server-himlaoy.vercel.app/jwt', user)
                    .then(data => {
                        localStorage.setItem('user_secret', data.data.token)
                        setLoading(false)
                        // console.log(data.data)
                    })
                    .catch(error => console.log(error.message))
            }
            else {
                localStorage.removeItem("user_secret")
            }
        })

        return () => {
            return unSubscribe()
        }
    }, [])




    const userInfo = {
        loading,
        user,
        logOut,
        createUser,
        signInUser,
        updateUser,
        gProvider
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;