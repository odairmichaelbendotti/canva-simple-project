import React, { useState } from 'react';
import { GrTemplate } from "react-icons/gr";
import { LuShapes } from "react-icons/lu";
import { IoCloudUploadOutline } from "react-icons/io5";
import { CiText, CiFolderOn, CiImageOn } from "react-icons/ci";
import { TbBackground } from "react-icons/tb";
import { IoIosArrowBack } from "react-icons/io";
import TemplateModel from './TemplateModel';

const LateralComponents = () => {
    const [show, setShow] = useState({
        name: '',
        visible: false
    })

    return (
        <div className={`w-18 bg-[#202224] absolute top-0 left-0 h-full`}>
            <div className='flex flex-col items-center justify-center text-gray-400 gap-3 transiction-all duration-500'>

                <div
                    onClick={() => setShow({ name: 'template', visible: true })}
                    className={`w-full py-3 cursor-pointer flex flex-col items-center justify-center hover:text-gray-300 gap-1 ${show.name == 'template' ? 'bg-[#252729]' : ''}`}>
                    <GrTemplate size={22} />
                    <p className='text-xs'>Template</p>
                </div>

                <div
                    onClick={() => setShow({ name: 'shapes', visible: true })}
                    className={`w-full py-3 cursor-pointer flex flex-col items-center justify-center hover:text-gray-300 gap-1 ${show.name == 'shapes' ? 'bg-[#252729]' : ''}`}>
                    <LuShapes size={22} />
                    <p className='text-xs'>Shapes</p>
                </div>

                <div
                    onClick={() => setShow({ name: 'upload', visible: true })}
                    className={`w-full py-3 cursor-pointer flex flex-col items-center justify-center hover:text-gray-300 gap-1 ${show.name == 'upload' ? 'bg-[#252729]' : ''}`}>
                    <IoCloudUploadOutline size={22} />
                    <p className='text-xs'>Upload</p>
                </div>

                <div
                    onClick={() => setShow({ name: 'text', visible: true })}
                    className={`w-full py-3 cursor-pointer flex flex-col items-center justify-center hover:text-gray-300 gap-1 ${show.name == 'text' ? 'bg-[#252729]' : ''}`}>
                    <CiText size={22} />
                    <p className='text-xs'>Text</p>
                </div>

                <div
                    onClick={() => setShow({ name: 'projects', visible: true })}
                    className={`w-full py-3 cursor-pointer flex flex-col items-center justify-center hover:text-gray-300 gap-1 ${show.name == 'projects' ? 'bg-[#252729]' : ''}`}>
                    <CiFolderOn size={22} />
                    <p className='text-xs'>Project</p>
                </div>

                <div
                    onClick={() => setShow({ name: 'images', visible: true })}
                    className={`w-full py-3 cursor-pointer flex flex-col items-center justify-center hover:text-gray-300 gap-1 ${show.name == 'images' ? 'bg-[#252729]' : ''}`}>
                    <CiImageOn size={22} />
                    <p className='text-xs'>Images</p>
                </div>

                <div
                    onClick={() => setShow({ name: 'background', visible: true })}
                    className={`w-full py-3 cursor-pointer flex flex-col items-center justify-center hover:text-gray-300 gap-1 ${show.name == 'background' ? 'bg-[#252729]' : ''}`}>
                    <TbBackground size={22} />
                    <p className='text-xs'>Background</p>
                </div>



            </div>
            {show.visible &&
                <div className='h-full w-86 bg-[#252729] absolute top-0 left-18 px-4 py-2'>
                    
                    <div className='absolute -right-9 top-0 px-2 py-2 bg-[#202224] text-white cursor-pointer' onClick={() => setShow({ name: '', visible: false })}>
                        <IoIosArrowBack size={20} />
                    </div>

                    <TemplateModel type={ show.name } />
                </div>
            }

        </div>
    );
};

export default LateralComponents;