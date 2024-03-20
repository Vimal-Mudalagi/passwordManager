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

                <div className="text-black flex flex-col p-4 gap-5 items-center">
                    <input placeholder='Enter the website URL' className='rounded-full border border-green-500 w-full p-4 py-2' type="text" />
                    <div className="flex w-full justify-between gap-3">
                        <input placeholder='Enter username' className='rounded-full border border-green-500 w-full p-4 py-2' type="text" />

                        <div className="relative">

                            <input placeholder='Enter password' className='rounded-full border border-green-500 w-full p-4 py-2' type="text" />

                            <span className='absolute right-0 top-1'>
                                <img src="icons/eye.png" alt="" />

                            </span>
                        </div>


                    </div>

                    <button className='font-bold flex justify-center items-center bg-green-500 px-4 py-2 gap-2 w-fit hover:bg-green-400 rounded-full'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover"
                        // colors="primary:#ffffff"
                        >
                        </lord-icon>
                        Add Password</button>

                </div>
            </div>
        </>
    )
}

export default Manager
