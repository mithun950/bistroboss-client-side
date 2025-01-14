import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import auth from '../Firebase/Firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosOpen from '../components/hooks/useAxiosOpen';


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

 const [user,setUser] = useState(null);
 const [loading,setLoading] = useState(true);
 const axiosPublic = useAxiosOpen()

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

   const updateUserProfile = () => {
    return updateProfile(auth.currentUser,{
      displayName: name, photoURL: photo
  
    })
   }

   

   const logOut = () => {
    setLoading(true)
    signOut(auth)
   }

   useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        if(currentUser){
            setUser(currentUser);
            if(currentUser){
                //  get token and store client
                const userInfo = { email: currentUser.email};
                  axiosPublic.post('/jwt', userInfo)
                  .then(res => {
                    if(res.data.token){
                       localStorage.setItem('access-token', res.data.token)
                    }
                  })
            }
            else{
              //do sumthing
              localStorage.removeItem('access-token')
            }

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
       updateUserProfile,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;