import React from 'react';

const CreateComponent = ({ info, current_component }) => {http://localhost:5173/

    if (info.name == 'main_frame') {
        return (
            <div className='shadow-md border-[1px]'
                style={{
                    width: info.width + 'px',
                    height: info.height + 'px',
                    backgroundColor: info.color,
                    zIndex: info.z_index
                }}>
                {
                    info.image && <img src={info.img} alt="Image" />
                }
            </div>
        )
    }
};

export default CreateComponent;