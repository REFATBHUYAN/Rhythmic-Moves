import React, { createContext, useEffect, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, GoogleAuthProvider } from "firebase/auth";
import app from '../firbase/firebase.config';

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
    const updateUser = (user,name, photo) =>{
        setLoading(true);
        // console.log(auth.currentUser);
        return updateProfile(user,{
            displayName: name, 
            photoURL: photo
          })
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            // console.log('user from useffect', loggedUser)
            setUser(loggedUser);
            setLoading(false);
        })
        return () =>{
            unsubscribe();
        }
    },[])
    const googleLogIn =() =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const authItem ={
        
        googleLogIn,
        createUser,
        updateUser,
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