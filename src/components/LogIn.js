import React from 'react'
import { auth } from '../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function LogIn() {

  const [
    signInWithEmailAndPassword,
    user,
 
  ] = useSignInWithEmailAndPassword(auth);
  const handleSubmitLogIn = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value


    //   createUserWithEmailAndPassword(auth ,email,password)
    //   .then(result=>{
    //     const user = result.user
    //     console.log(user.email)
    //   })
    //  .catch(error=>console.error())


    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result)
      })
      .catch(error => console.log(error))
  }


  return (
    <div className=' h-[580px] '>
      <h1 className='text-center text-3xl font-bold my-4'>Log IN</h1>
      <div className='flex justify-center'>
        <form onSubmit={handleSubmitLogIn} >
          <input name='email' className='border border-black block pl-2 rounded-md w-96 h-10  mb-3' placeholder='Your Email..' type="email" />

          <input name='password' className='border border-black block  pl-2 rounded-md w-96 h-10 mb-3' placeholder='Give a strong password..' type="password" />
          <div>  <button className=' w-full border border-black block rounded-lg px-4 py-2 mb-3' type='submit'>Log In</button></div>

        </form>
      </div>

    </div>
  )
}