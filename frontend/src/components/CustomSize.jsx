import React, { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { TbArrowAutofitWidth } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

const CustomSize = ({ input, show, setShow, handleChangeInput }) => {
    const [checkInput, setCheckInput] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const navigate = useNavigate()

    const handleCreateNewDesign = () => {
        if (!input.width || !input.height) {
            setCheckInput(true)
            return
        } else {
            setCheckInput(true)
            navigate('/design/create', { state: { width: input.width, height: input.height } })
        }
    }

    return (
        <>
            {show &&
                <form className='w-74 bg-white absolute top-15 right-8 shadow-sm shadow-black rounded-md px-4 py-2' onSubmit={handleSubmit}>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <TbArrowAutofitWidth />
                            <p className='font-bold'>Dimensions</p>
                        </div>
                        <IoCloseOutline
                            size={24}
                            className='cursor-pointer'
                            onClick={() => setShow(!show)}
                        />
                    </div>

                    <div className='w-full mt-2 flex gap-3'>
                        <div>
                            <p>Width</p>
                            <input
                                type="number"
                                className='w-full border-1 rounded-sm py-2 text-sm pl-2 outline-none'
                                name="width"
                                onChange={(e) => handleChangeInput(e)}
                            />
                        </div>
                        <div>
                            <p>Height</p>
                            <input
                                type="number"
                                className='w-full border-1 rounded-sm py-2 text-sm pl-2 outline-none'
                                name="height"
                                onChange={(e) => handleChangeInput(e)}
                            />
                        </div>
                    </div>
                    {checkInput &&
                        <p className='font-bold text-xs text-red-600'>Os dois campos são obrigatórios.</p>
                    }

                    <button
                        className='w-full py-2 px-2 bg-[#4876D2] mt-2 mb-1 rounded-md text-white cursor-pointer font-bold hover:opacity-95'
                        onClick={() => handleCreateNewDesign()}
                    >Create new design</button>
                </form>
            }
        </>
    );
};

export default CustomSize;