import React from 'react';
import { CiHome, CiFolderOn  } from "react-icons/ci";
import { LuLayoutTemplate } from "react-icons/lu";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='max-w-[300px] w-full bg-[#3057A2]'>
            <div className='px-4 py-2 flex flex-col gap-4 justify-center w-full'>
                <div className='flex items-center gap-4 mt-6'>
                    <img src="/user.jpg" alt="" className='w-12 h-12 rounded-full' />
                    <div>
                        <p className='text-sm font-bold text-white'>Odair</p>
                        <p className='text-xs font-bold text-white'>obendotti@gmail.com</p>
                    </div>
                </div>
                <div className='h-[500px]'>
                    <ul className='mt-4 flex flex-col gap-2'>
                        <Link to='/content' className='flex items-center gap-2 text-white font-bold py-3 rounded-sm hover:bg-[#4F70B1] cursor-pointer px-4'>
                            <CiHome size={ 20 } />
                            <p>Home</p>
                        </Link>
                        <Link to='/projects' className='flex items-center gap-2 text-white font-bold py-3 rounded-sm hover:bg-[#4F70B1] cursor-pointer px-4'>
                            <CiFolderOn size={ 20 } />
                            <p>Projects</p>
                        </Link>
                        <Link to='/templates' className='flex items-center gap-2 text-white font-bold py-3 rounded-sm hover:bg-[#4F70B1] cursor-pointer px-4'>
                            <LuLayoutTemplate size={ 20 } />
                            <p>Templates</p>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;