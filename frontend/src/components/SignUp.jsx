import React from 'react';
import { IoMdClose } from "react-icons/io";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const SignUp = ({ setShow }) => {
    return (
        <div className='w-90 bg-[#202224] shadow-lg p-8 rounded-lg'>
            <div className='flex flex-col'>
                <div className='flex items-center text-white mb-6'>
                    <p className='flex-1 text-center uppercase font-bold'>Login</p>
                    <IoMdClose size={20}
                        className='cursor-pointer'
                        onClick={() => setShow({ signin: false, signup: false })} />

                </div>

                <div className='mt-4'>
                    <label htmlFor="name" className='text-white'>Name</label>
                    <input
                        type="text"
                        id="name"
                        className='w-full border-1 border-gray-700 rounded-md outline-none pl-2 text-sm text-gray-300 py-2 focus:border-green-500'
                        placeholder='Password'
                    />
                </div>

                <div>
                    <label htmlFor="email" className='text-white'>E-mail</label>
                    <input
                        type="text"
                        id="email"
                        className='w-full border-1 border-gray-700 rounded-md outline-none pl-2 text-sm text-gray-300 py-2 focus:border-green-500'
                        placeholder='E-mail'
                    />
                </div>
                <div className='mt-4'>
                    <label htmlFor="password" className='text-white'>Password</label>
                    <input
                        type="password"
                        id="password"
                        className='w-full border-1 border-gray-700 rounded-md outline-none pl-2 text-sm text-gray-300 py-2 focus:border-green-500'
                        placeholder='Password'
                    />
                </div>
                <button className='mt-4 w-full bg-[#8436D2] py-2 rounded-md text-white font-bold cursor-pointer hover:opacity-85'>Sign In</button>

                <div className='flex gap-4 items-center mx-auto'>
                    <div className='w-26 h-[1px] bg-gray-600'></div>
                    <p className='my-4 text-white text-center'>or</p>
                    <div className='w-26 h-[1px] bg-gray-600'></div>
                </div>

                <button className='w-full bg-orange-400 py-2 rounded-md hover:opacity-85'>
                    <div className='flex items-center gap-2 text-white max-w-48 w-full mx-auto cursor-pointer justify-between'>
                        <FaGoogle size={20} />
                        <p>Login with Gmail</p>
                    </div>
                </button>

                <button className='w-full bg-blue-400 py-2 rounded-md hover:opacity-85 mt-2'>
                    <div className='flex items-center gap-2 text-white max-w-48 w-full mx-auto cursor-pointer justify-between'>
                        <FaFacebook size={20} />
                        <p>Login with Facebook</p>
                    </div>
                </button>

            </div>

        </div>
    );
};

export default SignUp;