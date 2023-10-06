import React, { useContext } from 'react';
import {FcGoogle} from "react-icons/fc"
import {BsGithub,BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import img4 from "../../assets/qZone1.png"
 import img5 from "../../assets/qZone2.png"
 import img6 from "../../assets/qZone3.png"
import { MyContext } from '../Contextapi/ContextApi';

const LoginWithRight = () => {
    const {googleAthntocation,githubAthntocation,twitterAthntocation,fecebookAthntocation} = useContext(MyContext)
    const handelGoogleRegistration = () =>{
        googleAthntocation()
        
    }
    const handelGithubRegistration = () =>{
        githubAthntocation()
        
    }
    const handelTwitterRegistration = () =>
    {
        twitterAthntocation()
    }
    const handelFacebookRegistration = () =>
    {
        fecebookAthntocation()
    }
    return (
        <div className='sticky top-2'>
           <div className='space-y-2'>
            <h1 className='font-bold text-xl'>Login With</h1>
                <div onClick={handelGoogleRegistration} className='w-[100%] border text-center rounded-md text-xl   py-2'>
                    <h1>
                        <FcGoogle className='inline-block mr-2'></FcGoogle>
                        Login with Google
                    </h1>
                </div>
                <div onClick={handelGithubRegistration} className='w-[100%] border text-center text-xl rounded-md  py-2'>
                        <h1>
                        <BsGithub className='inline-block mr-2'></BsGithub>
                        Login with Github
                        </h1>
                </div>
           </div>
           <div  className='mt-5 '>
           <h1 className='font-bold text-xl'>Find Us On</h1>
           <div className='border mt-3'>
                <div  onClick={handelFacebookRegistration} className='w-[100%] rounded-md  py-2 px-5'>
                <h1>
                        <BsFacebook className='inline-block mr-2'></BsFacebook>
                        Login with Facebook
                        </h1>
                </div>
                <hr />
                <div onClick={handelTwitterRegistration} className='w-[100%] rounded-md  py-2 px-5'>
                <h1>
                        <AiFillTwitterCircle className='inline-block mr-2'></AiFillTwitterCircle>
                        Login with twiter
                        </h1>
                </div>
                <hr />
                <div  className='w-[100%] rounded-md  py-2 px-5'>
                <h1>
                        <BsGithub className='inline-block mr-2'></BsGithub>
                        Login with Github
                        </h1>
                </div>
               
              
           </div>
           </div>

           <div className='bg-[#F3F3F3] py-4 mt-5'>
            <h1 className='font-bold ml-2'>Q-Zone</h1>
                <div>
                    <img className='w-full' src={img4} alt="" />
                </div>
                <div>
                    <img className='w-full' src={img5} alt="" />
                </div>
                <div>
                    <img className='w-full' src={img6} alt="" />
                </div>
           </div>
        </div>
    );
};

export default LoginWithRight;