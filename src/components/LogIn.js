import React from 'react'
import { auth } from '../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
export default function LogIn() {
  const [
    signInWithEmailAndPassword,
    user,] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate()
  if (user) {
    navigate('/')
  }
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    signInWithEmailAndPassword(data.email, data.password)

  };




  return (
    <div className=' h-[580px] '>
      <h1 className='text-center text-3xl font-bold my-4'>Log IN</h1>
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
          <div>  <button className=' w-full border border-black block rounded-lg px-4 py-2 mb-3' type='submit'>Log In</button></div>
        </form>
      </div>
    </div>
  )
}