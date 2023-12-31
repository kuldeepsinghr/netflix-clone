import React from 'react'
import { useAuthContext } from '../context/authenticate'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
  const {user} = useAuthContext()
  if(!user){
    return <Navigate to='/'/>
  }else{
    return children
  }
}

export default ProtectedRoute
