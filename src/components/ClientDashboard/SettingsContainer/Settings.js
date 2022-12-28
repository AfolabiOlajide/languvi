import React from 'react';
import ProfileImg from "../../../assets/details-img.png"

const Settings = () => {
    return (
        <div>
            <div className="full-details w-full px-[1.5rem] py-[3rem] mt-[2rem] shadow-sm shadow-cyan-300 rounded-md md:w-[80%]">
                <div className="personal-details mb-6">
                    <h2 className='font-bold text-xl mb-4'>Personal Details</h2>
                    <div className="details flex flex-col gap-6 md:flex-row">
                        <div className="img w-[12rem] h-[12rem] overflow-hidden bg-black rounded-[2rem] ">
                            <img src={ProfileImg} className="object-cover h-full w-full" alt="" />
                        </div>
                        <div className="form flex flex-col gap-5 w-[60%]">
                            <div className="name w-full">
                                <h3 className='text-sm text-slate-500 mb-3'>Name</h3>
                                <input className='outline-none focus:ring-1 focus:ring-cyan-300 border p-2 rounded-lg border-slate-300 w-full' type="text" name="name" placeholder='Stella Brown' id="" />
                            </div>
                            <div className="gender">
                                <h3 className='text-sm text-slate-500 mb-3'>Gender: <span className='text-slate-700 font-bold'>Female</span></h3>
                                <select className='outline-none focus:ring-1 focus:ring-cyan-300 border p-2 rounded-lg border-slate-300' name="gender" id="">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="prefer not to say">Prefer not to say</option>
                                </select>
                            </div>
                            <div className="phone-number w-full">
                                <h3 className='text-sm text-slate-500 mb-3'>Phone Number</h3>
                                <input className='outline-none focus:ring-1 focus:ring-cyan-300 border p-2 rounded-lg border-slate-300 w-full' type="tel"  placeholder='07012456723' name="phone" />
                            </div>
                            <div className="email w-full">
                                <h3 className='text-sm text-slate-500 mb-3'>Email</h3>
                                <input className='outline-none focus:ring-1 focus:ring-cyan-300 border p-2 rounded-lg border-slate-300 w-full' type="email"  placeholder='stellabrown223@mymail.com' name="mail" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="address-details">
                <h2 className='font-bold text-xl mb-4'>Address</h2>
                    <div className="details flex flex-col gap-y-3 md:grid md:grid-cols-3 md:gap-6">
                        <div className="address-line">
                            <h3 className='text-sm text-slate-500 mb-3'>Address Line</h3>
                            <input className='outline-none focus:ring-1 focus:ring-cyan-300 border p-2 rounded-lg border-slate-300 w-full' type="text" name="name" placeholder='No 35 Jimmy Ebi Street' id="" />
                        </div>
                        <div className="country">
                            <h3 className='text-sm text-slate-500 mb-3'>Country: <span className='text-slate-700 font-bold'>Nigeria</span></h3>
                            <select className='outline-none focus:ring-1 focus:ring-cyan-300 border p-2 rounded-lg border-slate-300' name="country" id="">
                                <option value="united-states">United Sates</option>
                                <option value="united-kingdom">United Kingdom</option>
                                <option value="nigeria">Nigeria</option>
                            </select>
                        </div>
                        <div className="language">
                            <h3 className='text-sm text-slate-500 mb-3'>Native Language: <span className='text-slate-700 font-bold'>English</span></h3>
                            <select className='outline-none focus:ring-1 focus:ring-cyan-300 border p-2 rounded-lg border-slate-300' name="language" id="">
                                <option value="english">English</option>
                                <option value="yoruba">Yoruba</option>
                                <option value="spanish">Spanish</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings