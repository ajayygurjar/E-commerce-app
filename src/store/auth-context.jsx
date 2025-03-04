/* eslint-disable react/prop-types */

import React,{ useState,useEffect, } from "react"



const AuthContext=React.createContext({
token:'',
isLoggedIn:false,
login:(token)=>{},
logout:()=>{}
})


export const AuthContextProvider=(props)=>{
    const initialToken=localStorage.getItem('token')
    
    const [token,setToken]=useState(initialToken);


    const userIsLoggedIn=!!token;

    const loginHandler=(token)=>{
        setToken(token);
        localStorage.setItem('token',token)

    }


    const logoutHandler=()=>{
        setToken(null);
        localStorage.removeItem('token')
    }

    useEffect(()=>{
        if(userIsLoggedIn){
            const timer=setTimeout(()=>{
                logoutHandler();
            },300000);
            return ()=>{
                clearTimeout(timer)
            }
        }
    },[userIsLoggedIn])




    //Created object which contains state and function to global context provider

    const contextValue={
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler,
    }

    

    return <AuthContext.Provider value={contextValue}>
        {props.children}
        </AuthContext.Provider>
}

export default AuthContext;
