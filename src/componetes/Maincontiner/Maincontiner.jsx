import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Notish from '../Header/Notish';

const Maincontiner = () => {
    return (
        <div className='max-w-7xl px-4   mx-auto font-fontPoppines'>
            <Header></Header><br />
            <Notish ></Notish><br />
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Maincontiner;