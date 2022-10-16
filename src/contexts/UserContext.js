import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
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
    // It's event trigger API call systm
    // create for login page
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // side effect API call
    // why are we doing this??
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('auth state changed', currentUser);
        })

        return () => {
            unsubcribe();
        }
    }, [])

    const authInfo = { user: user, createUser, signIn };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;