import { rankings } from 'match-sorter';
import React from 'react';
import { BsBookmark,BsShare } from 'react-icons/bs';
import { BiShow } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Newscord = ( {newsData} ) => {
    const {_id,title,author,thumbnail_url,image_url,details,rating,total_view}=newsData
    const{name,published_date,img}=author
    const {number}=rating
    return (
        <div className='py-0 mt-3 border rounded-md'>
            <div className='flex justify-between items-center px-5 bg-gray-300'>
                    <div className='flex   items-center'>
                        <div className='p-4 '>
                            <img className='h-16  rounded-full' src={img} alt="" />
                        
                        </div>
                        <div>
                            <h1>{name}</h1>
                            <h1>{published_date}</h1>
                        </div>
                </div>
                <div className='flex gap-3'>
                    <h1 className='text-3xl'><BsBookmark></BsBookmark></h1>
                    <h1 className='text-3xl'><BsShare></BsShare></h1>
                </div>

            </div>
            <div className='p-4'>
                <h1 className='font-bold text-[20px] '>{title}</h1>
                <div>
                    <img src={image_url} alt="" />
                </div>
                <div className='py-4'>
                    {details.length>200 ?
                    <>
                    {details.slice(0,200)}
                    <Link to={`/detals/${_id}`} className='block text-red-400 underline'>Read more</Link>
                    </>:""
                    
                    
                }
                    
                </div>
                <hr />
                <div className='mt-5 flex justify-between items-center'>
                   
                    <div className='flex gap-2 items-center'>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                            <p>{number}</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <h1 className='text-2xl'><BiShow></BiShow></h1>
                        <h1>{total_view}</h1>
                    </div>
                    
                </div>
            </div>
         
        </div>
    );
};

export default Newscord;