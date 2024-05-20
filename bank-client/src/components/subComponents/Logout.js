import React from 'react'
import { removeAdminToken, removeCustomerToken } from '../../services/authServices'
import { useAuth } from '../../services/AuthContext'

const Logout = ({role}) => {

//    const token = role==="Customer" ? getCustomerToken() : getAdminToken()

const {logout} = useAuth()

   const handleLogout=()=> role==='Customer' ? removeCustomerToken() : removeAdminToken()

  return (
    // <button onClick={handleLogout}>Logout</button>
    <button onClick={logout}>Logout</button>
  )
}

export default Logout