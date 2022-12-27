import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WelcomeImg from "../../../assets/welImg.png";
import { MdBookmark } from "react-icons/md";
import { IoIosFolder } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl"

const Dashboard = () => {
    const [welcomeImgAvailable, setWelcomeImgAvailable] = useState(true);

    const toggleWelcomeImgHandler = () =>{
        setWelcomeImgAvailable(!welcomeImgAvailable);
    }

    return (
        <div className='px-6 py-3'>
            <div className="welcome">
                <img src={WelcomeImg} className={`w-full lg:w-[50%] ${welcomeImgAvailable ? "block" : "hidden"}`} alt="Welcome" onClick={toggleWelcomeImgHandler} />
            </div>
            <div className="flex flex-col-reverse gap-y-4 lg:grid lg:grid-cols-[70%_25%_] lg:gap-x-[2rem]">
                <div className="files">
                    {/* completed */}
                    <div className="completed mb-6">
                        <div className="head flex justify-between items-center mb-6">
                            <h2 className='font-bold text-headerText text-2xl'>Completed</h2>
                            <Link to="" className='text-linkColor'>View all</Link>
                        </div>
                        <div className="items flex flex-wrap flex-rows gap-4 ">
                            {/* item */}
                            <div className="item p-4 shadow-md shadow-slate-200 rounded-md flex gap-x-5">
                                <div className="left">
                                    <div className="w-[5rem] h-[4rem] bg-slate-200 rounded-t-md"></div>
                                    <div className="w-[5rem] h-[1.5rem] bg-orange-400 rounded-b-md text-white text-center">2.5MB</div>
                                </div>
                                <div className="right flex gap-x-2">
                                    <div className="info">
                                        <div className="category text-headerText font-bold">Insurance</div>
                                        <div className="title mt-2 mb-1">Coverage</div>
                                        <div className="language text-linkColor text-[.7rem]">English-Indonesian</div>
                                    </div>
                                    <div className="logo"><MdBookmark size={24} className={`text-primary cursor-pointer`} /></div>
                                </div>
                            </div>
                            {/* item */}
                            <div className="item p-4 shadow-md shadow-slate-200 rounded-md flex gap-x-5">
                                <div className="left">
                                    <div className="w-[5rem] h-[4rem] bg-slate-200 rounded-t-md"></div>
                                    <div className="w-[5rem] h-[1.5rem] bg-orange-400 rounded-b-md text-white text-center">2.5MB</div>
                                </div>
                                <div className="right flex gap-x-2">
                                    <div className="info">
                                        <div className="category text-headerText font-bold">Insurance</div>
                                        <div className="title mt-2 mb-1">Coverage</div>
                                        <div className="language text-linkColor text-[.7rem]">English-Indonesian</div>
                                    </div>
                                    <div className="logo"><MdBookmark size={24} className={`text-primary cursor-pointer`} /></div>
                                </div>
                            </div>
                            {/* item */}
                            <div className="item p-4 shadow-md shadow-slate-200 rounded-md flex gap-x-5">
                                <div className="left">
                                    <div className="w-[5rem] h-[4rem] bg-slate-200 rounded-t-md"></div>
                                    <div className="w-[5rem] h-[1.5rem] bg-orange-400 rounded-b-md text-white text-center">2.5MB</div>
                                </div>
                                <div className="right flex gap-x-2">
                                    <div className="info">
                                        <div className="category text-headerText font-bold">Insurance</div>
                                        <div className="title mt-2 mb-1">Coverage</div>
                                        <div className="language text-linkColor text-[.7rem]">English-Indonesian</div>
                                    </div>
                                    <div className="logo"><MdBookmark size={24} className={`text-primary cursor-pointer`} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* translating */}
                    <div className="translating mb-6">
                        <div className="head flex justify-between items-center mb-6">
                            <h2 className='font-bold text-headerText text-2xl'>Translating</h2>
                            <Link to="" className='text-linkColor'>View all</Link>
                        </div>
                        <div className="items flex flex-wrap flex-rows gap-4 ">
                            {/* item */}
                            <div className="item p-2 shadow-md shadow-slate-200 rounded-md flex gap-x-2 items-center">
                                <div className="left">
                                    <IoIosFolder size={34} className="text-headerText" />
                                </div>
                                <div className="right ">
                                    <div className="info">
                                        <div className="category text-headerText font-bold">Insurance</div>
                                        <div className="title text-headerTextLight">3 Files - olsworld copies</div>
                                    </div>
                                </div>
                                <div className="logo"><SlOptionsVertical size={24} className={`text-headerText cursor-pointer opacity-70`} /></div>
                            </div>
                            {/* item */}
                            <div className="item p-2 shadow-md shadow-slate-200 rounded-md flex gap-x-2 items-center">
                                <div className="left">
                                    <IoIosFolder size={34} className="text-headerText" />
                                </div>
                                <div className="right ">
                                    <div className="info">
                                        <div className="category text-headerText font-bold">Insurance</div>
                                        <div className="title text-headerTextLight">3 Files - olsworld copies</div>
                                    </div>
                                </div>
                                <div className="logo"><SlOptionsVertical size={24} className={`text-headerText cursor-pointer opacity-70`} /></div>
                            </div>
                            {/* item */}
                            <div className="item p-2 shadow-md shadow-slate-200 rounded-md flex gap-x-2 items-center">
                                <div className="left">
                                    <IoIosFolder size={34} className="text-headerText" />
                                </div>
                                <div className="right ">
                                    <div className="info">
                                        <div className="category text-headerText font-bold">Insurance</div>
                                        <div className="title text-headerTextLight">3 Files - olsworld copies</div>
                                    </div>
                                </div>
                                <div className="logo"><SlOptionsVertical size={24} className={`text-headerText cursor-pointer opacity-70`} /></div>
                            </div>
                        </div>
                    </div>
                    {/* proofreading */}
                    <div className="proofreading mb-6">
                        <div className="head flex justify-between items-center mb-6">
                            <h2 className='font-bold text-headerText text-2xl'>Proofreading</h2>
                            <Link to="" className='text-linkColor'>View all</Link>
                        </div>
                        <div className="items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                            {/* item */}
                            <div className="item p-4 border border-solid rounded-3xl flex justify-between">
                                <div className="info">
                                    <div className="category text-headerText font-bold">Plants</div>
                                    <div className="title">Coverage</div>
                                    <div className="language text-linkColor text-[.7rem]">English-Indonesian</div>
                                </div>
                                <div className="logo"><MdBookmark size={24} className={`text-primary cursor-pointer`} /></div>
                            </div>
                            {/* item */}
                            <div className="item p-4 border border-solid rounded-3xl flex justify-between">
                                <div className="info">
                                    <div className="category text-headerText font-bold">Plants</div>
                                    <div className="title">Coverage</div>
                                    <div className="language text-linkColor text-[.7rem]">English-Indonesian</div>
                                </div>
                                <div className="logo"><MdBookmark size={24} className={`text-primary cursor-pointer`} /></div>
                            </div>
                            {/* item */}
                            <div className="item p-4 border border-solid rounded-3xl flex justify-between">
                                <div className="info">
                                    <div className="category text-headerText font-bold">Plants</div>
                                    <div className="title">Coverage</div>
                                    <div className="language text-linkColor text-[.7rem]">English-Indonesian</div>
                                </div>
                                <div className="logo"><MdBookmark size={24} className={`text-primary cursor-pointer`} /></div>
                            </div>
                        </div>
                    </div>
                    {/* on Revision */}
                    <div className="proofreading mb-6">
                        <div className="head flex justify-between items-center mb-6">
                            <h2 className='font-bold text-headerText text-2xl'>Proofreading</h2>
                            <Link to="" className='text-linkColor'>View all</Link>
                        </div>
                        <div className="items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                            {/* item */}
                            <div className="item p-4 border border-solid rounded-3xl flex justify-between">
                                <div className="info">
                                    <div className="category text-headerText text-sm font-bold">Term Paper (Govermental Issues)</div>
                                    <div className="language text-linkColor text-[.7rem]">English-Indonesian</div>
                                </div>
                                <div className="logo"><MdBookmark size={24} className={`text-primary cursor-pointer`} /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="account">
                    <h3 className="font-bold text-xl lg:text-center text-headerText">Account Balance</h3>
                    <div className="balance w-fit px-12 py-6 mt-4 flex items-center justify-center lg:w-full lg:h-auto lg:p-6 shadow-lg rounded-md">
                        random
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard