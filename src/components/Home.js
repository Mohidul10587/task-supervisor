import React from 'react'
import { Link } from 'react-router-dom';
import Form from './Form';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase.init';


const Home = () => {

const handleSignOut =()=>{
    signOut(auth)
}



    return (
        <div> 
            <div className='flex justify-end '>
            <button className=' hover:text-red-500 mr-16 border border-black rounded-md px-2' onClick={handleSignOut} >Sine Out</button>           
            </div>
            <div className='flex justify-center'>
                <Form></Form>
            </div>
            <div className='flex justify-center'>
            <Link className='m-3 hover:text-green-500' to='dataTable'>View Jobs</Link>
            
            </div>
        </div>

    )
}

export default Home