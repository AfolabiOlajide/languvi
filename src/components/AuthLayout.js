import React from 'react';
import { Outlet } from 'react-router-dom';
import AuthImg from "../assets/auth-img.png"

const AuthLayout = () => {
    return (
        <div className='md:grid md:grid-cols-2 md:gap-x-6 p-8 min-h-[100vh]'>
            <div className="outlet flex flex-col justify-center items-center">
                <Outlet />
            </div>
            <div className="hidden design bg-ash px-[5rem] rounded-2xl md:flex justify-center items-center">
                <div className="inner bg-white p-12 rounded-3xl">
                    <div className="inner-img flex justify-center items-center">
                        <img src={AuthImg} className="w-[12rem]" alt="" />
                    </div>
                    <h2 className='text-navyDark font-bold text-4xl my-5'>Why Choose Us?</h2>
                    <ul className='list-disc text-sm'>
                        <li>Get quality translation to over 30 languages at the same time.</li>
                        <li>Delivering edited translation with time</li>
                        <li>Secured connections & encrpted data</li>
                        <li>Verified translators</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout

// Get quality translation to over 30 languagesat the same time.
// Delivering edited translation with time
// Secured connections & encrpted data
// Verified translators