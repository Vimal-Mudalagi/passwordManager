import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

const Manager = () => {
    const ref = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])


    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        let passwordArray;
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }

    
    }, [])


    const showPassword = () => {
        alert("show the password");
        console.log(ref.current.src)
        if (ref.current.src.includes("icons/eyehide.png")) {
            ref.current.src = "icons/eye.png"
        }
        else {
            ref.current.src = "icons/eyehide.png"
        }
    }



    const savePassword = () => {
        console.log(form)


    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }


    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            <div className="mycontainer">
                <h1 className=' text-white text-4xl font-bold text-center'><span className='text-green-500'>&lt;</span>
                    password
                    <span className='text-green-500'>Manager/&gt;</span></h1>
                <p className='text-white text-2xl py-4 text-center'>Your Own Password Manager</p>

                <div className="text-black flex flex-col p-4 gap-5 items-center">
                    <input value={form.site} onChange={handleChange} placeholder='Enter the website URL' className='rounded-full border border-green-500 w-full p-4 py-2' type="text" name='site' />
                    <div className="flex w-full justify-between gap-3">
                        <input value={form.username} onChange={handleChange} placeholder='Enter username' className='rounded-full border border-green-500 w-full p-4 py-2' type="text" name='username' />

                        <div className="relative">

                            <input value={form.password} onChange={handleChange} placeholder='Enter password' className='rounded-full border border-green-500 w-full p-10 py-2' type="text" name='password' />

                            <span className='absolute right-0 top-0 cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className='p-2' width={40} src="icons/eye.png" alt="" />

                            </span>
                        </div>


                    </div>

                    <button onClick={savePassword} className='font-bold flex justify-center items-center bg-green-500 px-4 py-2 gap-2 w-fit hover:bg-green-400 rounded-full'>
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
