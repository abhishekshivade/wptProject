import React, { createContext, useContext, useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { getAdminToken, getCustomerToken, removeAdminToken, removeCustomerToken } from '../services/authServices'
// import {ADMIN_DASHBOARD,CUSTOMER_DASHBOARD,BASE_ROUTE} from '../constants/AppRoutes'
import{adminLogin} from '../services/adminServices'
import{customerLogin}from '../services/customerServices'

const AuthContext=createContext();

export const AuthProvider=({Children})=>{
    const [user, setUser]=useState(null);
    const [error,setError]=useState(null)
    // const navigate=useNavigate()

    // useEffect(()=>{
    //     const customerToken= getCustomerToken();
    //     const adminToken=getAdminToken()

    //     if(customerToken){
    //         setUser({type:'Customer', token:customerToken})
    //     }else if(adminToken){
    //         setUser({type:'Employee',token:adminToken})
    //     }
    // },[])

    // const login=userData=>{
    //     setUser(userData)
    //     // navigate(userData.type === 'Employee' ? `${ADMIN_DASHBOARD}`:`${CUSTOMER_DASHBOARD}`)
    // }

    const login= async(userData,userType)=>{
        setError(null);
        try{
            let response;

            if(userType==='Customer'){
                response=await customerLogin(userData)
            }else if(userType==='Employee'){
                response=await adminLogin(userData)
            }

            setUser(response.data)
        }catch(error){
            setError('Invalid userName or Password')
        }
    }

    const logout=()=>{
        if(user?.type==='Customer'){
            removeCustomerToken()
        }else if(user?.type === 'Employee'){
            removeAdminToken()
        }

        setUser(null)
        // navigate(`${BASE_ROUTE}`)
    }

    const isAuthenticated=()=> {
        return !user
    }

    return(
        <AuthContext.Provider value={{user,login,logout,isAuthenticated,error}}>
            {Children}
        </AuthContext.Provider>
    )
}

export const useAuth=()=>useContext(AuthContext)