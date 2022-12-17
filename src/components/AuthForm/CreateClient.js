import React from 'react';
import Inputs from '../../utils/InputComponent/Inputs';
import { Link } from 'react-router-dom';

const CreateClient = () => {
    return (
        <div>
            <div className="header mb-12">
                <h1 className='text-4xl text-navyDark font-bold mb-3'>Create Client Account</h1>
                <p className='text-slate-500'>Not a client? <Link to="/create-translator" className='text-blue-500'>Create a translator account</Link> instead</p>
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
                    <button className='block text-center p-3 bg-primary text-white w-full rounded-md'>Create Account</button>
                </div>
            </div>
        </div>
    )
}

export default CreateClient