import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../../../Firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

const AuthProvider=({children})=>{
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password).finally(() => setLoading(false));
        
    }
const signInUser=(email, password)=>{
setLoading(true)
return signInWithEmailAndPassword(auth,email,password)
.finally(() => setLoading(false));
}

const signInGoogle=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
     .then(result=>{
        console.log(result)
       })
       .then(error=>{
        console.log(error)
       })
   
}

useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
    })

    return ()=>{
       unsubscribe() 
    }
},[])



const singOut=()=>{
    signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
}
    const authInfo={
    createUser,user,loading,signInUser,signInGoogle,singOut
    }



    return(
        <AuthContext value={authInfo}>
        {children}
        </AuthContext>
    )
}


export default AuthProvider