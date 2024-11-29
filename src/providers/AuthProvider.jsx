import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import PropTypes from "prop-types";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";

const fbProvider = new FacebookAuthProvider();

const provider = new GoogleAuthProvider();



export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    // Email pass user creation
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }


    // Sign In With Email pass
    const signIn =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    // Google login
    const googleSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }

    // Login By Facebook
    const fbSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth,fbProvider);
    }

    // update user
    const updateUser=(name,photoUrl)=>{
        setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photoUrl
        })
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return(()=>{
            unsubscribe();
        })
    },[])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        fbSignIn,
        updateUser,


    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.node,
}


export default AuthProvider;