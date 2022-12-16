import React from 'react';
import Inputs from '../../utils/InputComponent/Inputs';
import {FcGoogle} from 'react-icons/fc'
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div>
            <div className="header mb-12">
                <h1 className='text-4xl text-navyDark font-bold mb-3'>Client Sign In</h1>
                <p className='text-slate-500'>Please fill your detail to access your account</p>
            </div>
            <div className="">
                <div className="name form grid grid-cols-2 gap-x-4">
                    <Inputs id="first-name" label="First Name" placeholder="First Name" type="text" key="first-name" />
                    <Inputs id="last-name" label="Last Name" placeholder="Last Name" type="text" key="last-name" />
                </div>
                <div className="email">
                    <Inputs id="email" label="Email" placeholder="debra.holt@example.com" type="email" key="email" />
                </div>
                <div className="password">
                    <Inputs id="password" label="Password" placeholder="your password" type="password" key="password" />
                </div>
                <div className="option flex justify-between my-6">
                    <div className="remember-me">
                        <input type="checkbox" name="remember-me" id="remeber-me" /> Remeber Me
                    </div>
                    <div className="forget-password">
                        <Link to="" className='text-blue-500'>Forgot password?</Link>
                    </div>
                </div>
                <div className="sign-in mb-3">
                    <button className='block text-center p-3 bg-primary text-white w-full rounded-md'>Sign In</button>
                </div>
                <div className="sign-in-google">
                    <button className='flex justify-center items-center gap-3 text-center p-3 border-2 w-full rounded-md'><FcGoogle size={24}/> Sign In With Google</button>
                </div>
                <div className="last-option mt-3 text-center">
                    <p>Do not have an account? <Link to="/sign-up" className='text-blue-500'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignIn