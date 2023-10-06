import { createContext, useEffect, useState } from "react";
import { auth } from "../Firbase/Firebase";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const MyContext = createContext()

   
const ContextApi = ({children}) => {
    const [currentUser,setCurrentUser]=useState(null)
    const [loder,setLoder]=useState(true)
//userCreat
    const creatEmilAndPassword = (email,password)=>{
        setLoder(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
// userSing In
    const singWithEmailAndPassword = (email,password)=>{
        setLoder(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
//google Auntication
    const googleAthntocation = () =>{
        setLoder(true)
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth,provider)
    }
//github authentiocation
    const githubAthntocation = () =>{
        setLoder(true)
        const provider = new GithubAuthProvider()
        return signInWithPopup(auth,provider)
    }
//twiter authentiocation
    const twitterAthntocation = () =>{
        setLoder(true)
        const provider = new TwitterAuthProvider()
        return signInWithPopup(auth,provider)
    }
//Facebook authentiocation
    const fecebookAthntocation = () =>{
        setLoder(true)
        const provider = new FacebookAuthProvider()
        return signInWithPopup(auth,provider)
    }
// current User state set
    useEffect (()=>{
        const unsubcribe= onAuthStateChanged(auth,(user)=>{
            console.log('currentUser',user);
          setCurrentUser(user)
          setLoder(false)
        })
        return ()=>{
            unsubcribe ()
        }
    },[])
// logOut user 
    const logOutUser = ()=>{
        setLoder(true)
        return signOut(auth)
    }
    const passingDataContexApi = {
        logOutUser,
        currentUser,
        loder,
        creatEmilAndPassword,
        singWithEmailAndPassword,
        googleAthntocation,
        githubAthntocation,
        twitterAthntocation,
        fecebookAthntocation
    }
    return (
        <MyContext.Provider value={passingDataContexApi}>
            {children}
          
        </MyContext.Provider>
    );
};

export default ContextApi;