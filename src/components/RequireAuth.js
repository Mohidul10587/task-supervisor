





import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom'
import { auth } from '../firebase.init';

export default function RequireAuth({ children }) {
    const [user] = useAuthState(auth);
    const location = useLocation()
   
    if (!user) {
        return <Navigate to="/LogIn" state={{ from: location }} replace />
    }
    else{
        return children;
    }

}