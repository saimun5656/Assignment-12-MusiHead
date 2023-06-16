/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup } from 'firebase/auth'
import app from "../../FireBase/firebase.config";
import axios from "axios";
export const  AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const auth = getAuth(app);
    const googleProvider =  new GoogleAuthProvider()
    useEffect(()=>{
    const unsub = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            if(currentUser){
                axios.post('https://assignment-12-summer-camp-server-saimun5656.vercel.app/jwt',{email:currentUser?.email})
            .then(res=>{
                localStorage.setItem('access-token',res.data.token)
            })
            }
            else{
                localStorage.removeItem('access-token')
            }
            setLoading(false);
        })
    return ()=>{unsub()}
    })
    
    const signUpWithEmail=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const emailLogin = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signUpWithGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    
    const authInfo ={
        user,
        loading,
        signUpWithEmail,
        emailLogin,
        signUpWithGoogle,
        logOut,
    }

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;