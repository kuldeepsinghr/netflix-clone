import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../context/authenticate'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const {signIn} = useAuthContext()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleLogin = async (e)=>{
      e.preventDefault()
      try{
        await signIn(email, password)
        navigate('/')
      }catch(e){
        setError(e)
      }
    }

  return (
    <>
       <div className='h-screen w-full'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="img" 
      className='object-cover absolute hidden sm:block w-full h-full'/>
      <div className='fixed top-0 left-0 w-full h-screen bg-black/60'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='bg-black max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Log In</h1>
            {error ? <p className='p-3 my-2 bg-red-400'>{error}</p> : null}
            <form onSubmit={(e)=>handleLogin(e)} className='w-full flex flex-col py-4'>
              <input className='my-2 p-3 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete='email'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}  
              />
              <input className='my-2 p-3 bg-gray-700 rounded' type="password" placeholder='Password' autoComplete='current-password'
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              />
              <button type='submit' className='bg-red-600 py-3 my-6 rounded font-bold'>Login Up</button>
              <p className='py-8'>
                <span className='text-gray-600'>New to Netflix?</span>
                <Link to='/signup'>Sign Up</Link>
                </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
