import React, { useEffect } from 'react'
import { ADMIN_LOGIN_ROUTE, ADMIN_SIGNUP_ROUTE, CUSTOMER_LOGIN_ROUTE, CUSTOMER_SIGNUP_ROUTE1 } from '../../constants/AppRoutes';

const Authentication = ({role}) => {
    
  useEffect(() => {
    // console.log(role)
  }, [role]);
  return (
    <div>{
    role === "Customer" ? <div className='space-x-5'>
        <a href={CUSTOMER_LOGIN_ROUTE} class="px-6 py-1 rounded-xl bg-white font-semibold hover:bg-blue-700 hover:text-white">LogIn</a>
        <a href={CUSTOMER_SIGNUP_ROUTE1} class="px-4 py-1 rounded-xl bg-white font-semibold hover:bg-blue-700 hover:text-white">Sign Up</a>
    </div> : <div className='space-x-2'>
        <a href={ADMIN_LOGIN_ROUTE} class="px-6 py-1 rounded-xl bg-white font-semibold hover:bg-blue-700 hover:text-white">LogIn</a>
        <a href={ADMIN_SIGNUP_ROUTE} class="px-4 py-1 rounded-xl bg-white font-semibold hover:bg-blue-700 hover:text-white">Sign Up</a></div>}</div>
  )
}

export default Authentication