import React, {createContext, useContext, useState, useEffect} from 'react';
export const LoginContext = createContext();
export const useLogin = ()=> useContext(LoginContext);

export const LoginProvider = ({children})=>{
    const[session, setSession]=useState(null);

    useEffect(()=>{

        const expireComparison = (initial, actual)=>{
            if(initial < actual){
                return console.log('la sesión expiró')
            }else{
                return console.log('la sesión está activa')
            }

        }
        const savedSession = localStorage.getItem('userSession');
        if(savedSession !== undefined){
            const actual = new Date;
            expireComparison(JSON.parse(savedSession.expires), actual)
            setSession(JSON.parse(savedSession));
        }
    },[])
    
    return <LoginContext.Provider value={{session, setSession}}>
            {children}
        </LoginContext.Provider>
}