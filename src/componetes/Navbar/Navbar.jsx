import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import img from "../../assets/user.png"
import { MyContext } from '../Contextapi/ContextApi';

const Navbar = () => {
  const {logOutUser,currentUser}=useContext(MyContext)
  const handelLogOut = () =>{
    logOutUser()
    .then(()=>{
      return alert("logOut successful")
    })
  }

    return (
        <div className="navbar py-7  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <ul className="menu menu-horizontal px-1 flex flex-col">
         <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/product'}>About</NavLink>
           <NavLink to={'/sin'}>carer</NavLink>
           
            </ul>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Drogon</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
          <NavLink   className="mr-4 " to={'/'}>Home</NavLink>
          <NavLink   className="mr-4" to={'/product'}>About</NavLink>
           <NavLink  to={'/sin'}>carer</NavLink>
           
          </ul>
        </div>
        <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={img} />
        </div>
      </label>
        {
          currentUser? <button  onClick={handelLogOut} className='btn bg-gray-400'>logout</button> 
          :
          <p className='mr-2 btn  bg-gray-400'><NavLink to={'/singin'}>SingIn</NavLink></p>
        }
        </div>
      </div>
    );
};

export default Navbar;