import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app)

const UserContext = ({ children }) => {
    //create for home page test. const user = { displayName: 'Akash' }
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    //G-2 google provider
    const googleProvider = new GoogleAuthProvider();


    // create for register page
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //EP2.1 It's event trigger API call systm
    //EP2.1 create for login page
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //G1.1 google templ setup
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // create for header Sign out handle
    const logOut = () => {
        return signOut(auth);
    }

    //EP2.1 side effect API call
    //EP2.1 why are we doing this??
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log('auth state changed', currentUser);
        })

        return () => {
            unsubcribe();
        }
    }, [])

    const authInfo = { user: user, createUser, signIn, logOut, signInWithGoogle, loading };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;