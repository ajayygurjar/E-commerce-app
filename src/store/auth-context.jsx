
import React,{ useState,useEffect } from "react"

const AuthContext=React.createContext({
token:'',
isLoggedIn:false,
login:(token)=>{},
logout:()=>{}
})


export const AuthContextProvider=(props)=>{
    const [token,setToken]=useState(null);


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
        localStorage.getItem('token');
    })

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
