import React from 'react';
import moment from 'moment';
import icon from "../../assets/logo.png"

const Header = () => {
    return (
        <div className='text-center space-y-3 text-xl font-semibold mt-9'>
          <img className='mx-auto' src={icon} alt="" />
          <p className=''>Journalism Without Fear or Favour</p>
          <p>{moment().format("dddd,MMMM , DD,YYYY")}</p>
        </div>
    );
};

export default Header;