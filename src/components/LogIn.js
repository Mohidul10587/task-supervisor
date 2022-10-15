import React from 'react'
import { auth } from '../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Loading from './shared/Loading';
export default function LogIn() {


  const { register, handleSubmit, formState: { errors } } = useForm();
  const [signInWithEmailAndPassword, user, loading,error] = useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate()

  let firebaseError;

  if(loading) {
     return <p className='text-center'><Loading></Loading></p>

  } 

  if (error) {
    firebaseError = <small className='text-red-600'>{error.message}</small>
  }

  if (user) {
    navigate('/')

  }
  const onSubmit = data => {

    signInWithEmailAndPassword(data.email, data.password)

  }

  return (
    <div className='mt-16'>
      <h1 className='text-center text-2xl font-bold mb-4'>Log In</h1>
      <div className='flex justify-center'>


        <form onSubmit={handleSubmit(onSubmit)}>

          <input className='border border-black block pl-2 rounded-md w-96 h-10  mb-3' type='email' {...register("email", {
            required: {
              value: true,
              message: 'This is required field'
            },
            pattern: {
              value: /[A-Za-z]{3}/,
              message: 'This is wrong email'
            }
          })} placeholder='Your Email..' />
          <label className="label">

            {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email?.message}</span>}
            {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email?.message}</span>}
          </label>


          <input className='border border-black block pl-2 rounded-md w-96 h-10  mb-3' type='password'  {...register("password", {
            required: {
              value: true,
              message: 'This is also required field'
            },
            minLength: {
              value: 6,
              message: 'Must be 6 characters'
            }
          })} placeholder='Give a strong password..' />
          <label>

            {errors.password?.type === 'required' && <span className='text-red-500'>{errors.password?.message}</span>}
            {errors.password?.type === 'minLength' && <span className='text-red-500'>{errors.password?.message}</span>}
          </label>
          {firebaseError}
          <div>  <button className='block border border-black my-1 p-2 rounded-lg w-96 hover:bg-gray-600 hover:text-white font-bold' type='submit'>Log In</button></div>
        </form>
      </div>
    </div>
  )
}