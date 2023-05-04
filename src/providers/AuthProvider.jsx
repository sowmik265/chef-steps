import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // git / googlele

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const gitHubLogIn = () => {
        return signInWithPopup(auth, gitHubProvider);
    }

    // register

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log(loggedUser)
            setUser(loggedUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user, createUser, signIn, logOut, googleLogIn, gitHubLogIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;