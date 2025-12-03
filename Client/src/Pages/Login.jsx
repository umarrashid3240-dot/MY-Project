import React from 'react'

const Login = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
    <div className='bg-white shadow-lg rounded-2xl px-10 py-8 w-96'>
      <h1 className='text-center text-3xl font-bold mb-4 text-blue-600' >Login 🔐</h1>
      <form>
        <div className='mb-5'>
          <label className= ' block text-gray-700 text-sm font-semibold mb-2'>
            E-mail
          </label>
          <input
          type='email'
          placeholder='Enter Your Email'
          className='w-full px-4 py-2 border rounded-lg focus:outline-none  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition'
           />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Password
          </label>
          <input 
          type='password'
          placeholder='Enter Your Password'
          className='w-full px-4 py-2 border rounded-lg focus:outline-none  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition'
          />
        </div>
        <button
        type='submit'
        className='bg-blue-600 hover:bg-red-400 focus:outline-none  focus:ring-2 focus:ring-black focus:border-black text-white font-bold py-2 px-4 rounded w-full'
        >
          Login

        </button>

      </form>
    </div>
    </div>
  )
}

export default Login
