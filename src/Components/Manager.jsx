import React from 'react';
import { useRef, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])


    useEffect(() => {
        let passwords = localStorage.getItem("passwords");

        if (passwords) {
            setpasswordArray(JSON.parse(passwords));
        }
    }, []);


    const copyText = (text) => {
        toast('🦄 Copied to clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",

        });
        navigator.clipboard.writeText(text)
    }

    const showPassword = () => {
        passwordRef.current.type = "text"
        console.log(ref.current.src)
        if (ref.current.src.includes("icons/eyehide.png")) {
            passwordRef.current.type = "password"
            ref.current.src = "icons/eye.png"
        }
        else {
            ref.current.src = "icons/eyehide.png"
            passwordRef.current.type = ""
        }
    }




    const savePassword = () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
            setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]));
            console.log([...passwordArray, form]);
            setform({ site: "", username: "", password: "" });
            toast('Password saved!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            toast('Error: Password not saved!');
        }
    }




    const deletePassword = (id) => {
        console.log("Deleting password with id ", id)
        let c = confirm("Do you really want to delete this password?")
        if (c) {
            setPasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
            toast('Password Deleted!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

    }

    const editPassword = (id) => {

        console.log("Editing password with id ", id)
        setform(passwordArray.filter(i => i.id === id)[0])
        setPasswordArray(passwordArray.filter(item => item.id !== id))

    }







    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />



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

                            <form>
                                <input
                                    ref={passwordRef}
                                    value={form.password}
                                    onChange={handleChange}
                                    placeholder='Enter password'
                                    className='rounded-full border border-green-500 w-full p-10 py-2'
                                    type="password"
                                    name='password'
                                    id='password'
                                    autoComplete="new-password"
                                />
                            </form>


                            <span className='absolute right-0 top-0 cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className='p-2' width={40} src="icons/eye.png" alt="eye" />

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
                        Save Password</button>

                </div>
                <div className="passwords ">
                    <h2 className='font-bold text-2xl py-4 text-white'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div className='text-white'>No passwords to show</div>}
                    {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden ">
                        <thead className='bg-green-800 text-white' >
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Passwords</th>
                                <th className='py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white'>
                            {passwordArray.map((item, index) => (
                                <tr key={index}>
                                    <td className='py-2 text-center'>
                                        <div className='flex items-center justify-center'>
                                            <a href={item.site} target='_blank'>{item.site}</a>
                                            <div className="lordiconcopy size-7 cursor-pointer" onClick={() => { copyText(item.site) }}>

                                                <lord-icon className={"cursor-pointer"}
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/depeqmsz.json"
                                                    trigger="hover"
                                                >
                                                </lord-icon>

                                            </div>
                                        </div>
                                    </td>
                                    <td className='py-2 text-center'>
                                        <div className='flex items-center justify-center'>
                                            <span>{item.username}</span>
                                            <div className="lordiconcopy size-7 cursor-pointer" onClick={() => { copyText(item.username) }}>

                                                <lord-icon className={"cursor-pointer"}
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/depeqmsz.json"
                                                    trigger="hover"
                                                >
                                                </lord-icon>

                                            </div>
                                        </div>

                                    </td>
                                    <td className='py-2 text-center'>
                                        <div className='flex items-center justify-center'>
                                            <span>{item.password}</span>

                                            <div className="lordiconcopy size-7 cursor-pointer" onClick={() => { copyText(item.password) }}>

                                                <lord-icon className={"cursor-pointer"}
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/depeqmsz.json"
                                                    trigger="hover"
                                                >
                                                </lord-icon>

                                            </div>
                                        </div>
                                    </td>

                                    <td className='justify-center py-2 border border-white text-center'>
                                        <span className='cursor-pointer mx-1' onClick={() => { editPassword(item.id) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/wuvorxbv.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                        <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item.id) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/xekbkxul.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>}
                </div>
            </div >
        </>
    );
}



export default Manager
