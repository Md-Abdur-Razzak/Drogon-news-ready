import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';
import img1 from "../../assets/1.png"
 import img2 from "../../assets/2.png"
 import img3 from "../../assets/3.png"


const Allcatagory = () => {
    const [catagory,setCatagory]= useState([])
    useEffect(()=>{
        fetch("categories.json")
        .then(res=>res.json())
        .then(data=>setCatagory(data))
    },[])
    return (
        <div className='sticky top-2'>
            <div className='md:space-x-5'>
            <h1 className='font-bold text-[24px] md:block flex justify-center  '>All Catagories</h1>
                <div className='md:space-y-3 md:block flex flex-wrap items-center justify-evenly  gap-4  md:mt-3 mt-14 text-[20px] font-semibold text-[#9F9F9F]'>
                    {
                        catagory.map(item=><p key={item.id}><Link>{item.name}</Link></p>)
                    }
                </div>
            </div>

            <div className='hidden md:block'>
                <div className='mt-4 '>
                    <img className='w-full' src={img1} alt="" />
                    <p className='text-justify font-bold'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className='flex gap-2 text-[#9F9F9F] '>
                        <h1>sports</h1>
                        <h1>icon <span>{moment().format("MMM DD,YYYY")}</span></h1>
                    </div>
                </div>
                <div className='mt-4'>
                    <img  className='w-full' src={img2} alt="" />
                    <p className='text-justify font-bold'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className='flex gap-2 text-[#9F9F9F] '>
                        <h1>sports</h1>
                        <h1>icon <span>{moment().format("MMM DD,YYYY")}</span></h1>
                    </div>
                </div>
                <div className='mt-4'>
                    <img  className='w-full' src={img3} alt="" />
                    <p className='text-justify font-bold'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className='flex gap-2 text-[#9F9F9F] '>
                        <h1>sports</h1>
                        <h1>icon <span>{moment().format("MMM DD,YYYY")}</span></h1>
                    </div>
                </div>
</div>
        </div>
    );
};

export default Allcatagory;
