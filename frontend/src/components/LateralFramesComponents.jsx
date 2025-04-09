import React, { useState } from 'react';
import { RiExpandRightFill } from "react-icons/ri";
import { RiExpandLeftFill } from "react-icons/ri";

const LateralFramesComponents = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div className={`w-42 bg-[#202224] absolute top-0 right-0 h-full`}>
            <div className='flex flex-col items-center justify-center'>
                
            </div>
        </div>
    );
};

export default LateralFramesComponents;