import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Topbar from '../components/Topbar';
import RecentDesign from '../components/RecentDesign';

const Content = () => {
    const { } = useOutletContext()

    return (
        <main className='flex flex-col h-full w-full bg-[#282828] px-2'>
            <Topbar />
            <div className='mt-2'>
                <RecentDesign />
            </div>
        </main>
    );
};

export default Content;