/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import app from './../firebase/firebase.init';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
const auth = getAuth(app);

export const AuthContext = createContext(null);


const AuthProviders = ({children}) => {

const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
const GProvider = new GoogleAuthProvider();



    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const LoginWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, GProvider)
    }

    const updateUserProfile = (name, photo)=>{
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            return unsubscribe();
        }

    },[])

    const authInfo = {
      user,
      loading,
      createUser,
      userLogin,
      logOut,
      LoginWithGoogle,
      setUser,
      updateUserProfile,
    };
    
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProviders;