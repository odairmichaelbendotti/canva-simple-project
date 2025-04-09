import React, { useState } from 'react';
import CustomSize from './CustomSize';
import RecentDesign from './RecentDesign';

const Topbar = () => {
    const [show, setShow] = useState(false)
    const [input, setInput] = useState({
        width: 0,
        heigth: 0
    })

    const handleChangeInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='w-full h-[200px] bg-[#4D5CCA] hidden md:flex relative rounded-b-md justify-center items-center'>
            <div
                className='absolute right-8 top-4 px-4 py-2 bg-[#4876D2] text-white cursor-pointer hover:bg-[#5839C0] transition rounded-md'
                onClick={() => setShow(!show)}
            >Custom size</div>
            <p className='text-white text-3xl font-bold'>What will you design today?</p>
            <CustomSize
                show={show}
                setShow={setShow}
                handleChangeInput={handleChangeInput}
                input={ input }
            />
        </div>
    );
};

export default Topbar;