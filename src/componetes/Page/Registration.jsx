import React, { useContext } from 'react';
import { MyContext } from '../Contextapi/ContextApi';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import { sendEmailVerification } from 'firebase/auth';
import { auth } from '../Firbase/Firebase';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Registration = () => {
    const {creatEmilAndPassword} = useContext(MyContext)
    const handeCreateUser = (e) => {
            e.preventDefault()
            const email = e.target.email.value
            const password = e.target.password.value
        if (password.length<6) {
            return toast.error("Password minimam 6 creaters ")
          
        }
        creatEmilAndPassword(email,password)
        .then((res)=>{
              // sendEmailVerification(res.user)
              // .then(()=>{
              //   return toast.info ("Plase chack Email box and varifien Email")
              // })
        })
        .catch((error)=>{
            return toast.error("Email already Use")
        })
    }
    return (
     <div className='bg-base-200'>
        <div>
 
        </div>
        <div className="hero ] font-fontPoppines py-2.5">
         
         <div className="hero-content flex-col mt-20">
           <div className="text-center lg:text-left ">
             <h1 className="text-5xl font-bold">Registration</h1>
           
           </div>
           <div className="card border border-3 border-cyan-700 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-3">
           <form onSubmit={handeCreateUser} >
           <div className="card-body">
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Email</span>
                 </label>
                 <input type="email" placeholder="email" name='email' className="input input-bordered w-72" />
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Password</span>
                 </label>
                 <input type="password" name='password' placeholder="password" className="input input-bordered" />
                
               </div>
               <div className="form-control mt-6">
                 <button  className="btn btn-primary">Registration</button>
               </div>
               <div>
                  <span>Do You hava a alredy accoutn ? <Link to={"/singin"} className='text-blue-600'>Login</Link></span>
               </div>
             </div>
           </form>
           </div>
         </div>
       </div>
     </div>
    );
};

export default Registration;