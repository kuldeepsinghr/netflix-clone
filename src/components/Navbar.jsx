import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../context/authenticate'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const {user, logOut} = useAuthContext()
  const navigate = useNavigate()
  
  const handleLogOut = async ()=>{
    try{
      await logOut()
      navigate('/signup')
    }catch(e){
      alert(e)
    }
  }
  // console.log(user)

  return (
    <>
      <div className='flex items-center justify-between w-full absolute p-4 z-[100]'>
        <Link to='/'>
          <h1 className='text-red-600 font-bold text-4xl cursor-pointer'>NETFLIX</h1>
        </Link>
        {
          user ? <div className='flex items-center gap-4'>
            <Link to='/account'>
              <button className='text-white'>Account</button>
            </Link>
            <button onClick={handleLogOut} className='bg-red-600 text-white px-6 py-2 rounded cursor-pointer'>Log Out</button>
          </div> : <div className='flex items-center gap-4'>
            {/* <Link to='/login'>
              <button className='text-white'>Sign In</button>
            </Link> */}
            <Link to='/login'>
              <button className='bg-red-600 text-white px-6 py-2 rounded cursor-pointer'>Sign In</button>
            </Link>
          </div>
        }
      </div>
    </>
  )
}

export default Navbar
