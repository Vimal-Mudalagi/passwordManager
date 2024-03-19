import React from 'react'

function Manager() {
    return (
        <>
            <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            <div className="mycontainer">
                <h1 className=' text-white text-4xl font-bold text-center'><span className='text-green-500'>&lt;</span>
          password
          <span className='text-green-500'>Manager/&gt;</span></h1>
                <p className='text-white text-2xl py-4 text-center'>Your Own Password Manager</p>

                <div className="text-white flex flex-col p-4">
                    <input className='rounded-full' type="text" />
                    <div className="flex">
                        <input type="text" />
                        <input type="text" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Manager
