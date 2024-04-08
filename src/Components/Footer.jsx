import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#2e176b] text-white flex flex-col justify-center items-center  w-full'>
    <div className="logo font-bold text-white text-2xl">
        <span className='text-green-500'> &lt;</span>

        <span>password</span><span className='text-green-500'>Manager/&gt;</span>


    </div>
    <div className='flex justify-center items-center'> Created with <img className='w-7 mx-2' src="icons/heart.png" alt="" /> by Vimal Mudalagi </div>
</div>
  )
}

export default Footer
