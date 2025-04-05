import React from 'react';
import Header from './Header';
import { Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './Sidebar';

const Layout = () => {
    const [show, setShow] = useState({ signin: false, signup: false })
    const [inputSignIn, setInputSignIn] = useState({ email: '', password: '' })
    const [user, setUser] = useState(null)

    const handleChangeInputSignIn = (e) => {
        setInputSignIn({
            ...inputSignIn,
            [e.target.name]: e.target.value
        })
    }

    const location = useLocation()
    const routesWithSideBar = ['/projects', '/templates', '/content']
    const shouldShowSideBar = routesWithSideBar.includes(location.pathname)

    console.log(shouldShowSideBar)

    return (
        <div className='flex flex-col h-screen'>
            <Header setShow={setShow} />
            {shouldShowSideBar ?
                (<div className='flex h-screen'>
                    <Sidebar />
                    <Outlet context={{ show, setShow, inputSignIn, handleChangeInputSignIn }} />
                </div>)
                :
                (<Outlet context={{ show, setShow, inputSignIn, handleChangeInputSignIn }} />)}


        </div>
    );
};

export default Layout;