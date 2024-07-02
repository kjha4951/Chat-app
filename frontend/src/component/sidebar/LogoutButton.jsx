import React from 'react'
import {BiLogOut} from 'react-icons/bi'
import useLogout from '../../hooks/userlogout'

const LogoutButton = () => {

  const {loading , logout}=useLogout();
  
  return (
    <div className='mt-auto'>
     

     {!loading ? (
             <BiLogOut className='w-6 h-6 text-white-500 cursor-pointer'
             onClick={logout}
             />
     ):(
        <span className='loading loading-spinner'></span>

     )}
    </div>
  )
}

export default LogoutButton