import React from 'react'
import Inputs from '../../utils/InputComponent/Inputs';
import {FcGoogle} from 'react-icons/fc';
import { FaFacebook } from "react-icons/fa"
import { Link } from 'react-router-dom';

const CreateTranslator = () => {
    return (
        <div>
            <div className="header mb-12">
                <h1 className='text-4xl text-navyDark font-bold mb-3 text-center'>Become A Translator</h1>
                <div className="continue flex gap-x-3">
                    <div className="continue-google">
                        <button className='flex justify-center items-center gap-3 text-slate-500 text-sm text-center p-3 border-2 w-full rounded-md'><FcGoogle size={24}/> Continue With Google</button>
                    </div>
                    <div className="continue-facebook">
                        <button className='flex justify-center items-center gap-3 text-slate-500 text-sm text-center p-3 border-2 w-full rounded-md'><FaFacebook size={24}/> Continue With Facebook</button>
                    </div>
                </div>
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
                <div className="phone">
                    <Inputs id="phone" label="Phone Number" placeholder="your phone number" type="tel" key="phome" />
                </div>
                <div className="option flex my-5 text-slate-500">
                    <div className="remember-me">
                        <input type="checkbox" name="remember-me" id="remeber-me" /> I agree to terms and conditions and private policy
                    </div>
                </div>
                <div className="last-option my-3 text-center text-slate-500">
                    <p>Already have an account? <Link to="/" className='text-blue-500'>Sign In</Link></p>
                </div>
                <div className="sign-in mb-3">
                    <button className='block text-center p-3 bg-blue-600 text-white w-full rounded-md'>Create Account</button>
                </div>
            </div>
        </div>
    )
}

export default CreateTranslator