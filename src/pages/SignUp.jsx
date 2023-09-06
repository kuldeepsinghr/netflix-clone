import React, { useState } from 'react'
import Section from '../components/Section'
import { useAuthContext } from '../context/authenticate'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'; 

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signUp} = useAuthContext()
  const navigate = useNavigate()

  const createUser = async (e)=>{
    e.preventDefault()
    try{
      await signUp(email, password)
      navigate('/')
    }catch(e){
      alert(e)
    }
  }

  return (
    <>
      <div className='w-full text-white'> 
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="img"
        className='h-screen w-full object-cover'/>
        <div className='bg-black/60 fixed top-0 left-0 w-full'></div>
        <div className='absolute top-[40%] text-center w-full p-4 md:p-8 m-auto'>
          <h1 className='text-3xl md:text-6xl font-bold'>Laughter. Tears. Thrills. Find it all on Netflix.</h1>
          <h2 className="text-lg font-normal leading-5 md:text-2xl my-5">Endless entertainment starts at just ₹ 149. Cancel anytime.</h2>
          <h2 className="text-lg font-normal leading-5 md:text-xl my-5">Ready to watch? Enter your email to create or restart your membership.</h2>
          <form onSubmit={(e)=>createUser(e)} className="flex flex-col gap-3 md:flex-row md:gap-5 justify-center items-center w-[70%] m-auto">
                <input className="w-4/5 py-2 px-2 text-black outline-none md:py-3 h-[44px]" type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                <input className="w-4/5 py-2 px-2 text-black outline-none md:py-3 h-[44px]" type="password"
                    placeholder="Set password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                <button type='submit' className="py-2 px-3 bg-[#de0611] text-white rounded-sm font-normal text-sm lg:w-[30%] md:py-3">Get Started</button>
            </form>
        </div>

        <div className='container m-auto'>
        <Section/>
        </div>
      </div>
    </>
  )
}

export default SignUp
