import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";
import { CiSettings, CiLogout } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const Header = ({ setShow }) => {
    const [user, setUser] = useState(null)
    const [popup, setPopup] = useState(false)

    const checkUser = () => {
        const data = localStorage.getItem('user')
        setUser(data ? data : null)
    }

    useEffect(() => {
        checkUser()
    }, [])

    return (
        <header className='py-4 bg-[#202224] z-10 shadow-md shadow-[#282828]'>
            <ul className='md:mx-auto h-full flex items-center justify-between px-6'>
                <Link to='/'><li><img src="logo.svg" alt="canva logo" className='max-w-[80px] w-full cursor-pointer' /></li></Link>

                <div className='hidden md:flex w-full justify-end'>
                    {!user ?
                        (<div className='hidden md:flex gap-4 w-1/3 justify-end'>

                            <button
                                className='flex justify-center items-center py-2 max-w-32 w-full rounded-md cursor-pointer bg-[#016D6E] text-white hover:opacity-85'
                                onClick={() => setShow({ signin: true, signup: false })}
                            >Sign In</button>

                            <button
                                className='max-w-32 w-full rounded-md cursor-pointer bg-[#8436D2] text-white hover:opacity-85'
                                onClick={() => setShow({ signin: false, signup: true })}
                            >Sign Up</button>
                        </div>)
                        :
                        (<div className='flex items-center gap-4 w-96 justify-end'>
                            <Link to='/content'><button className='py-2 px-6 bg-[#8436D2] text-white rounded-md cursor-pointer hover:opacity-85'>Create a Design</button></Link>
                            <img src="/user.jpg" alt="" className='max-w-10 w-full h-10 rounded-full  cursor-pointer border-2 border-[#8436D2]' onClick={() => setPopup(!popup)} />

                            {popup &&
                                <div className='absolute top-18 right-6 w-60 bg-[#202224] border-1 border-gray-800'>
                                    <div className='py-3 px-4'>
                                        <div className='flex items-center gap-4'>
                                            <img src="/user.jpg" alt="user-img" className='w-8 h-8 rounded-full' />
                                            <div className='flex flex-col items-start'>
                                                <div className='flex items-center'>
                                                    <p className='text-gray-400 font-bold text-sm'>{user}</p>
                                                    <IoCloseOutline
                                                        size={20}
                                                        className='text-gray-400 cursor-pointer absolute top-3 right-4'
                                                        onClick={() => setPopup(!popup)}
                                                    />
                                                </div>
                                                <p className='text-gray-400 text-xs'>obendotti@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className='px-4 py-2'>
                                        <li className='text-gray-400 text-sm flex gap-4 pb-2'>
                                            <Link className='px-2 cursor-pointer flex items-center gap-2 font-medium hover:text-[#8436D2]'>
                                                <CiSettings size={18} />
                                                <span>Setting</span>
                                            </Link>
                                            <Link className='px-2 cursor-pointer flex items-center gap-2 hover:text-[#8436D2]'>
                                                <CiLogout size={18} />
                                                <span>Logout</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            }

                        </div>)
                    }
                </div>


                <div className='md:hidden'>
                    <IoIosMenu size={24} color='white' className='cursor-pointer' />
                </div>
            </ul>
        </header>
    );
};

export default Header;