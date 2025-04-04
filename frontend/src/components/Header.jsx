import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";

const Header = () => {
    return (
        <header className='h-18 bg-[#202224]'>
            <ul className='md:mx-auto h-full flex items-center justify-between px-6'>
                <Link to='/'><li><img src="../../public/logo.svg" alt="canva logo" className='max-w-[80px] w-full cursor-pointer' /></li></Link>
                <div className='hidden md:flex gap-4 w-1/3 justify-end'>
                    <button className='py-2 max-w-30 w-full rounded-md cursor-pointer bg-[#016D6E] text-white hover:opacity-85'>Sign In</button>
                    <button className='py-2 max-w-30 w-full rounded-md cursor-pointer bg-[#8436D2] text-white hover:opacity-85'>Sign Up</button>
                </div>
                <div className='md:hidden'>
                    <IoIosMenu size={24} color='white' className='cursor-pointer'/>
                </div>
            </ul>
        </header>
    );
};

export default Header;