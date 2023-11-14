/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase_config";


 export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {

    const [ user, setUser ] = useState(null)
    const [ loading, setLoading ] = useState(true)

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

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [setLoading, setUser])


    const authData = {
        user,
        loading,
        createUser,
        loginUser,
        logout
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