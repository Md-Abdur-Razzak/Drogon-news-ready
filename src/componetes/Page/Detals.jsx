import React, { useEffect, useState } from 'react';
import { useActionData, useLoaderData, useLocation, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Detalspage from './Detalspage';
import LoginWithRight from './LoginWithRight';

const Detals = () => {
    const [news,setNews]=useState([])
    const {id} = useParams()
    const data = useLoaderData()
    useEffect(()=>{
        const newData = data.find(item=>item._id===id)
        setNews([newData]);
    },[data,id])
   
    return (
        <div className='max-w-[1200px] mx-auto mt-8'>
           <div>
                <Header></Header>
           </div>
           <div className='grid grid-cols-3 mt-9  gap-7'>
                <div className='col-span-2'>
                        {
                            news?.map(oneNews=><Detalspage key={oneNews._id} oneNews={oneNews}></Detalspage>)
                        }
                </div>
                <div>
                    <LoginWithRight></LoginWithRight>
                </div>
           </div>
        </div>
    );
};

export default Detals;