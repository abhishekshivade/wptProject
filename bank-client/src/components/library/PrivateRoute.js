import React from 'react'
// import {getToken} from '../../services/authServices'
import {Navigate,Outlet} from 'react-router-dom'
import { ADMIN_LOGIN_ROUTE, BASE_ROUTE, CUSTOMER_LOGIN_ROUTE } from '../../constants/AppRoutes'
import {useAuth} from '../../services/AuthContext'

export const PrivateRoute = ({role}) => {
    // const token =getToken()
    // console.log("token : ",token)

    const {user}=useAuth();

    // if(token){
        if(user){
        // if(user && user.type === role){
        return <Outlet/>
    }else{
        // return <Navigate to={BASE_ROUTE}/>
        // return <Navigate to={`${role} === 'Customer' ? ${CUSTOMER_LOGIN_ROUTE}:${ADMIN_LOGIN_ROUTE}`}/>
        return <Navigate to={BASE_ROUTE}/>
    }
}