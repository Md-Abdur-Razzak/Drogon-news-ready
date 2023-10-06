import React, { useEffect, useState } from 'react';
import Newscord from './Newscord';

const Newsmiddle = () => {
    const [news,setNews]= useState([])
    useEffect(()=>{
        fetch("news.json")
        .then(res=>res.json())
        .then(data=>setNews(data))
    },[])
    return (
        <div className='md:mt-0 mt-20'>
           <div >
                {
                    news.map(newsData=><Newscord newsData={newsData} key={newsData._id}></Newscord>)
                }
           </div>
            
        </div>
    );
};

export default Newsmiddle;