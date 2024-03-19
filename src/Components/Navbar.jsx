import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-[#04020a] '>
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-20">

        <div className='logo font-bold text-white text-2xl px-15'>
          <span className='text-green-500'>&lt;</span>
          password
          <span className='text-green-500'>Manager/&gt;</span>

        </div>
        <ul>
          <li className='flex gap-4 text-white'>
            <a className='hover:font-bold' href='/'>Home</a>
            <a className='hover:font-bold' href='/'>About</a>
            <a className='hover:font-bold' href='/'>Contact</a>

          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
