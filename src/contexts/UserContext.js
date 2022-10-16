import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app)

const UserContext = ({ children }) => {
    //create for home page test. const user = { displayName: 'Akash' }
    const [user, setUser] = useState({ displayName: 'AAAKashhh' })

    // create for register page
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //R3 It's event trigger API call systm
    //R3 create for login page
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // create for header Sign out handle
    const logOut = () => {
        return signOut(auth);
    }

    //R3 side effect API call
    //R3 why are we doing this??
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('auth state changed', currentUser);
        })

        return () => {
            unsubcribe();
        }
    }, [])

    const authInfo = { user: user, createUser, signIn, logOut };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;