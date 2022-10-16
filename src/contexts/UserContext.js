import React, { createContext, useState } from 'react';
import { getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app)

const UserContext = ({ children }) => {
    // const user = { displayName: 'Akash' }
    const [user, setUser] = useState({ displayName: 'AAAKashhh' })

    const authInfo = { user: user };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;