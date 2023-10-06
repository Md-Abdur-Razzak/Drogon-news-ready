import React, { useContext } from 'react';
import { MyContext } from '../Contextapi/ContextApi';
import Navbar from '../Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingIn = () => {
  const navigate = useNavigate()
    
  const {singWithEmailAndPassword} = useContext(MyContext)
  const location1 = useLocation()
  console.log(location1.state);
  console.log(location1);
  const handeSingIng = (e) => {
          e.preventDefault()
          const email = e.target.email.value
          const password = e.target.password.value
          if (password.length<6) {
            return toast.error("Password minimam 6 creaters ")
          
        }
        singWithEmailAndPassword(email,password)
      .then((res)=>{
        navigate(location1?.state? location1.state :"/")
             if(!res.user.emailVerified)
             {
              toast.error("Please Email vrification ")
             }
             else{
                navigate("/")
             }
      })
      .catch((error)=>{
          console.log(error.message);
      })
  }
    return (
      <div className=' bg-base-200 '>
        <div className=''>
       
        </div>
          <div className="hero bg-base-200">
        <div className="hero-content flex-col mt-20">
          <div className="text-center lg:text-left ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          
          </div>
          <div className="card  border border-3 border-cyan-700 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-3">
          <form onSubmit={handeSingIng}>
          <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered w-72 " />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              
              </div>
              <div>
                  <p>Dont’t Have An Account ?<Link className='text-red' to={'/reg'}> Register</Link></p>
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>
      
      </div>
    );
};

export default SingIn;