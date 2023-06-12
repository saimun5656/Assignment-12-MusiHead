/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import getAuth, { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import app from "../../FireBase/firebase.config";

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const auth = getAuth(app);
    const googleProvider =  new GoogleAuthProvider()
    useEffect(()=>{
        onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false);
        })
    })
    const AuthContext = createContext(null);
    const signUpWithEmail=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const emailLogin = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignUp = ()=>{
        setLoading(true);
        return signUpWithEmail(auth, googleProvider)
    }
    const authInfo ={
        user,
        loading,
        signUpWithEmail,
        emailLogin,
        googleSignUp
    }

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;