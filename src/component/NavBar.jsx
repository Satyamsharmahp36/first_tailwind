import React from 'react'

function NavBar() {
  return (
    <div>
        <nav className='bg-red-600 h-20 flex justify-between items-center text-white p-8' >
          <div className='flex justify-evenly items-center text-center'>
            <h1 className='font-bold p-3 text-2xl '>Kalvium</h1>
            <div className='p-3'>About Us</div>
            <div className='p-3'>Contacts</div>
            <div className='p-3'>Courses</div>
          </div>
          <button className='border-2 border-white p-2 rounded-md'>
            Login
          </button>
        </nav>
    </div>
  )
}

export default NavBar