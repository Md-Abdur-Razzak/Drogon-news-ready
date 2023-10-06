import React, { useContext } from 'react';
import { MyContext } from '../Contextapi/ContextApi';
import { Navigate, useLocation } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner'

const Privateroute = ({children}) => {
    const {currentUser,loder} = useContext(MyContext)
    const location = useLocation()
  
    if(loder){
        return <div className='flex justify-center h-[50vh] items-center'>
             <RotatingLines
                strokeColor="red"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>
    }
    // currentUser null 
    if(currentUser){
        return children
    }
    else{
        return <Navigate state={location.pathname} to={'/singin'}></Navigate>
    }
};

export default Privateroute;