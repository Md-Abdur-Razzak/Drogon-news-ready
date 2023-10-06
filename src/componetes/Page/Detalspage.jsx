import React from 'react';

const Detalspage = ({oneNews}) => {
    const {_id,title,author,thumbnail_url,image_url,details,rating,total_view}=oneNews
    return (
        <div className='text-justify'>
            <img src={image_url} alt="" />
            <p className='py-6'>{details}</p>
        </div>
    );
};

export default Detalspage;