/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase_config";
import UsePublicAxios from "../Hooks/PublicAxios/UsePublicAxios";


export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = UsePublicAxios()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleProvider = new GoogleAuthProvider()

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            if (currentUser) {
                axiosPublic.post('/jwt', { email: currentUser?.email })
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('token', res.data.token)
                        }
                    })
            } else {
                localStorage.removeItem('token')
            }
        })
        return () => {
            unSubscribe()
        }
    }, [setLoading, setUser, axiosPublic])


    const authData = {
        user,
        loading,
        createUser,
        loginUser,
        logout,
        googleLogin
    }

    return (
        <AuthContext.Provider value={authData}>
            {
                children
            }
        </AuthContext.Provider>
    );
};




export default AuthProvider;