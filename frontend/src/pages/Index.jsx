import React, { useState } from 'react';
import SignIn from '../components/SignIn';
import SignUp from './../components/SignUp';

const Index = () => {
    const [show, setShow] = useState({ signin: false, signup: false })

    return (
        <main className='flex flex-col h-full bg-[#282828] relative'>
            <div className={`w-full h-full mx-auto px-6 flex flex-col justify-center items-center -mt-8`}>
                <h2 className='text-4xl text-center md:text-3xl text-white font-bold'>O que você pretende criar hoje?</h2>
                <span className='text-xl text-[#ACA9A9] font-medium text-center mt-4'>Com canva você pode criar designs profissionais com mais facilidade.</span>
                <div className='flex justify-center items-center gap-4 w-full'>
                    <button
                        className='bg-[#016D6E] py-2 max-w-50 w-full text-white rounded-md mt-6 cursor-pointer hover:opacity-85'
                        onClick={() => setShow({signin: true, signup: false})}
                    >SignIn</button>
                    <button
                        className='bg-[#8436D2] py-2 max-w-50 w-full text-white rounded-md mt-6 cursor-pointer hover:opacity-85'
                        onClick={() => setShow({signin: false, signup: true})}
                    >SignUp for free</button>
                </div>

            </div>
            {show.signin &&
                <div className='flex justify-center items-center w-full h-full absolute'>
                    <SignIn setShow={setShow} />
                </div>
            }
            {show.signup &&
                <div className='flex justify-center items-center w-full h-full absolute'>
                    <SignUp setShow={setShow} />
                </div>
            }
        </main>
    );
};

export default Index;