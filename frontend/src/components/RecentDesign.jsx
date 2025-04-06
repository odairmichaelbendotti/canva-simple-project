import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegTrashAlt } from "react-icons/fa";

const RecentDesign = () => {
    const [showTrash, setShowTrash] = useState(null)

    const design = [
        { id: 1, img: '/canva.png' },
        { id: 2, img: '/canva.png' },
        { id: 3, img: '/canva.png' },
        { id: 4, img: '/canva.png' },
        { id: 5, img: '/canva.png' },
        { id: 6, img: '/canva.png' }
    ]

    return (
        <div className='w-full text-xl font-bold text-white relative'>
            <p>You recent designs</p>
            <div className='w-full grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 h-full py-2 gap-2'>

                {design.map(item => (
                    <Link to='#' key={ item.id }
                        className='w-full bg-slate-200 h-full rounded-md relative shadow-md shadow-gray-700'
                        onMouseEnter={() => setShowTrash(item.id)}
                        onMouseLeave={() => setShowTrash(null)}>

                        <img src="/canva.png" alt="" className='rounded-md' />

                        {showTrash === item.id &&
                            <div
                                className='p-2 rounded-md inline-block absolute z-10 top-1 right-1'>
                                <FaRegTrashAlt
                                    size={16}
                                    color='white'
                                    onClick={() => alert(item.id)}
                                />
                            </div>
                        }
                    </Link>
                ))}



            </div>

        </div>
    );
};

export default RecentDesign;