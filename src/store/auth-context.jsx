/* eslint-disable react/prop-types */

import React,{ useState,useEffect, } from "react"



const AuthContext=React.createContext();


export const AuthContextProvider=(props)=>{
    
    
    const [token,setToken]=useState(localStorage.getItem('token')||null);
    const [userMail, setUserMail] = useState(localStorage.getItem('userMail') || '');


    const userIsLoggedIn=!!token;

    const loginHandler=(token,email)=>{
        setToken(token);
        localStorage.setItem('token',token)
        setUserMail(email);
		localStorage.setItem('userMail', email);


    }


    const logoutHandler=()=>{
        setToken(null);
        setUserMail(null);
        localStorage.removeItem('token');
        localStorage.removeItem('userMail');
    }

    useEffect(()=>{
        if(userIsLoggedIn){
            const timer=setTimeout(()=>{
                logoutHandler();
            },30000000);
            return ()=>{
                clearTimeout(timer)
            }
        }
    },[userIsLoggedIn])




    //Created object which contains state and function to global context provider

    const contextValue={
        token:token,
        isLoggedIn:userIsLoggedIn,
        userMail,
        login:loginHandler,
        logout:logoutHandler,
    }

    

    return <AuthContext.Provider value={contextValue}>
        {props.children}
        </AuthContext.Provider>
}

export default AuthContext;
