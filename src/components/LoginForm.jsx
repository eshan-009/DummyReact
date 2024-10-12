import React from 'react'
import { useForm } from 'react-hook-form';
const LoginForm = () => {
    const {
        register,
        handleSubmit,
        isValid,
        formState: { errors },
      } = useForm();
  return (
    <div>
         <form onSubmit={handleSubmit((data) => console.log(data))} 
    className='border flex flex-col w-1/2'>
      <input
      type='text'
      className='border border-black h-12'
      {...register('firstName',{ required: true })}
      />
       {errors.firstName && <p>firstName is required.</p>}

      <button
      disabled={!isValid}
      className='bg-yellow-300'>Submit</button>
    </form>
    </div>
  )
}

export default LoginForm
