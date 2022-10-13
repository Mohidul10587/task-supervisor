
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom'
import { auth } from '../firebase.init';

export default function RequireAuth({ children }) {
    const [user, loading] = useAuthState(auth);
    const location = useLocation()
    if (loading) return <p className='text-center font-bold text-xl mt-16'>Loading....</p>
    if (!user) return <Navigate to="/LogIn" state={{ from: location }} replace />
    return children;


}