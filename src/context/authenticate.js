import { createContext, useContext, useEffect, useState } from "react";
import {
    getAuth, 
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword
} from 'firebase/auth'
import {
    setDoc,
    doc
} from 'firebase/firestore'
import {app, db} from '../firebase'

const AppContext = createContext()

export const AppProvider = ({children})=>{
    const auth = getAuth(app)

    const [user, setUser] = useState(null)

    const signUp = (email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        setDoc(doc(db, 'users', email), {
            saveShows:[]
        })
    }

    const signIn = (email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = ()=>{
            onAuthStateChanged(auth, (currentUser)=>{
                if(currentUser){
                    setUser(currentUser)
                }else{
                    setUser(null)
                }
            })
        }
        return unSubscribe()
    },[])

    return <AppContext.Provider value={{
        signUp,
        signIn,
        user,
        logOut
    }}>
        {children}
    </AppContext.Provider>
}

export const useAuthContext = ()=>useContext(AppContext)