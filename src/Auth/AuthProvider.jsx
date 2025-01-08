import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import auth from '../Firebase/Firebase.config';
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

 const [user,setUser] = useState(null);
 const [loading,setLoading] = useState(true);

 const provider = new GoogleAuthProvider();

   const loginWithEmail = (email,password) =>{
     setLoading(true)
       return signInWithEmailAndPassword(auth,email,password);
   }

   const registerWithEmail = (email,password) => {
    setLoading(true)
      return  createUserWithEmailAndPassword(auth,email,password)
   }

   const loginWithGoogle = () => {
     return  signInWithPopup(auth, provider)

   }

   const logOut = () => {
    setLoading(true)
    signOut(auth)
   }

   useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        if(currentUser){
            setUser(currentUser);
            console.log('current user ', currentUser)

            setLoading(false);
        }
     });
     return () => {
        return unsubscribe;
     }
   } ,[])


    const authInfo = {
       user,
       loading,
       loginWithEmail,
       registerWithEmail,
       loginWithGoogle,
       logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;