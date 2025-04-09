import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import CreateComponent from './CreateComponent';
import LateralComponents from './LateralComponents';
import LateralFramesComponents from './LateralFramesComponents';

const CreateDesign = () => {
    const ref = useRef()
    const { state } = useLocation()

    const obj = {
        id: crypto.randomUUID(),
        name: "main_frame",
        type: "rectangle",
        height: state.height,
        width: state.width,
        z_index: 1,
        color: 'white',
        img: ''
    }

    return (
        <div
            className='w-full h-screen flex justify-center items-center relative bg-[#494949]'>
            <LateralComponents />
            <div
                ref={ref}
                className='relative w-auto h-auto overflow-auto'>
                <CreateComponent info={obj} current_component={{}} />
            </div>
            <LateralFramesComponents />
        </div>
    );
};

export default CreateDesign;