import React, { createContext, useEffect, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, GoogleAuthProvider } from "firebase/auth";
import app from '../firbase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email, password);
    }
    const logOut = () => {
        setLoading(true); 
        return signOut(auth);
    }
    
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
    const googleLogIn =() =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            console.log('user from useffect', loggedUser)
            setUser(loggedUser);
            if(loggedUser){
                // axios.post('http://localhost:5000/jwt', {email: loggedUser.email})
                axios.post('https://assignment-12-batch-7-server.vercel.app/jwt', {email: loggedUser.email})
                .then(data =>{
                    localStorage.setItem('access-token', data.data.token)
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
        })
        return () =>{
            unsubscribe();
        }
    },[])
    

    const authItem ={
        
        googleLogIn,
        createUser,
        updateUserProfile,
        logIn,
        logOut,
        loading,
        user
    }
    return (
        <AuthContext.Provider value={authItem}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;