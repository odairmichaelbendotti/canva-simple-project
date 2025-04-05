import React from 'react';
import SignIn from '../components/SignIn'
import { useOutletContext } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Content = () => {
    const { } = useOutletContext()

    return (
        <main className='flex h-full w-full bg-[#282828]'>
            <p>Content Page</p>
        </main>
    );
};

export default Content;