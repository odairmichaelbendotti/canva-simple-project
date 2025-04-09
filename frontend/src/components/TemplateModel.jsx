import { useState } from "react";
import { IoClose } from "react-icons/io5";

const TemplateModel = ({ type }) => {
    const [showRemoveImg, setShowRemoveImg] = useState(null)

    let style = 'grid grid-cols-2 gap-2 p-2'

    if (type === 'upload' || type === 'text') {
        style = 'grid grid-cols-1 gap-2 p-2'
    } else {
        style = 'grid grid-cols-2 gap-2 p-2'
    }

    return (
        <div className={style}>

            {type === 'template' &&
                <>
                    <div className='cursor-pointer'><img src="/canva.png" /></div>
                    <div className='cursor-pointer'><img src="/canva.png" /></div>
                    <div className='cursor-pointer'><img src="/canva.png" /></div>
                    <div className='cursor-pointer'><img src="/canva.png" /></div>
                    <div className='cursor-pointer'><img src="/canva.png" /></div>
                </>
            }

            {type === 'shapes' &&
                <>
                    <div className='h-24 w-24 border-2 border-gray-700 cursor-pointer mx-auto'></div>
                    <div className='h-24 w-24 rounded-full border-2 border-gray-700 cursor-pointer mx-auto'></div>
                </>
            }

            {type === 'upload' &&
                <>
                    <div className='w-full h-12 bg-purple-500 rounded-md border-gray-700 cursor-pointer mx-auto'>
                        <label htmlFor="uploadImage" className="w-full h-full flex justify-center items-center rounded-md cursor-pointer text-white">Upload image</label>
                        <input type="file" id="uploadImage" className="hidden" />
                    </div>

                    <div className="grid grid-cols-2 gap-2 w-full mt-2">
                        {[1, 2, 3, 4, 5, 6, 7, 7, 8].map((item, index) => (
                            <div className="relative">
                                <img src="/canva.png" className="rounded-sm cursor-pointer"
                                    onMouseEnter={() => setShowRemoveImg(index)}
                                // onMouseLeave={() => setShowRemoveImg(-1)}
                                />
                                {
                                    showRemoveImg === index &&
                                    <span
                                        className="absolute top-0 right-0 text-gray-100 cursor-pointer"
                                        onClick={() => alert(index)}
                                    >
                                        <IoClose />
                                    </span>
                                }

                            </div>
                        ))}
                    </div>
                </>
            }

            {
                type === 'text' &&
                <>
                    <div className="w-full bg-[#3C3C3D] text-white py-2 px-2 cursor-pointer hover:opacity-85">Add a title</div>
                    <div className="w-full bg-[#3C3C3D] text-white py-2 px-2 cursor-pointer hover:opacity-85">Add a paragraph</div>
                </>
            }


        </div>
    );
};

export default TemplateModel;