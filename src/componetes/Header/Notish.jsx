import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Notish = () => {
    return (
        <div className='flex gap-2 bg-gray-300 mt-3  rounded-md'>
            <button className='btn bg-red-500 text-white'>Latest</button>
           <Marquee>
            <Link className='mr-2'>morning news </Link>
            <Link className='mr-2'>BBc news </Link>
            <Link >sami televistion news </Link>
           </Marquee>
        </div>
    );
};

export default Notish;