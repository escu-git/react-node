import React, {createContext, useContext, useState, useEffect} from 'react';
export const LoginContext = createContext();
export const useLogin = ()=> useContext(LoginContext);

export const LoginProvider = ({children})=>{
    const[session, setSession]=useState(null);

    useEffect(()=>{
        fetch('http://localhost:3001/session',{
            method:'get',
            headers:{'Content-Type':'application/json'},
        })
        .then(res=>res.json())
        .then(res=>console.log(res))
    })
    
    return <LoginContext.Provider value={{session, setSession}}>
            {children}
        </LoginContext.Provider>
}
