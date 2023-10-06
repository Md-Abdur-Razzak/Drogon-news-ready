import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Notish from '../Header/Notish';
import Allcatagory from './Allcatagory';
import Newsmiddle from './Newsmiddle';
import LoginWithRight from './LoginWithRight';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto font-fontPoppines'>
          

          <div className='grid grid-cols-1  lg:grid-cols-4 mt-12 gap-3 '>
            <div >
              <Allcatagory></Allcatagory>
            </div>
            <div className='col-span-2'>
              <Newsmiddle></Newsmiddle>
            </div>
            <div >
             <LoginWithRight></LoginWithRight>
            </div>
          </div>
        </div>
    );
};

export default Home;