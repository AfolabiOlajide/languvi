import React, { useState } from 'react';
import { HiBadgeCheck } from 'react-icons/hi';
import Languages from "../langauages"

const Order = () => {
    const [plan, setPlan] = useState("professional");

    const changePlanHandler = (plan) => {
        setPlan(plan);
    }

    return (
        <>
            <div className="order grid grid-cols-[70%_30%] min-h-screen max-w-[80%] mx-auto">
                <div className="place-to-order m-4">
                    <h1 className='font-bold text-4xl text-gray-700 mb-2'>Order Page</h1>
                    <p className='text-slate-500'>Please fill as needed</p>
                    {/* select language */}
                    <div className="select-language bg-primaryLight p-12 mt-5 rounded-md flex flex-col gap-6">
                        <div className="source">
                            <div className="label">
                                <h4 className='text-slate-600'>Source Language</h4>
                            </div>
                            <div className="select mt-4">
                                <select name="source" id="" className='options outline-none border border-slate-400 p-3 rounded-md'>
                                    { Languages.map((lang, i) => (
                                        <option className='options' key={i} value={lang}>{lang}</option>
                                    )) }
                                </select>
                            </div>
                        </div>
                        <div className="target">
                            <div className="label">
                                <h4 className='text-slate-600'>Target Language</h4>
                            </div>
                            <div className="select mt-4">
                                <select name="target" id="" className='options outline-none border border-slate-400 p-3 rounded-md'>
                                    { Languages.map((lang, i) => (
                                        <option className='' key={i} value={lang}>{lang}</option>
                                    )) }
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* Plan */}
                    <div className="plans mt-12 grid grid-cols-3 gap-3">
                        {/* standard */}
                        <div className={`h-[50vh] relative plan-standard border border-gray-600 rounded-[1rem] transition-all duration-700 ease-in-out shadow-sm shadow-slate-300 p-6 ${plan === "standard" ? "bg-gray-800 scale-110 z-30" : "bg-white"}`}>
                            <h2 className={`text-2xl text-center capitalize font-bold  mb-4 ${plan === "standard" ? "text-white" : "text-gray-700"}`}>Standard</h2>
                            <p className={`text-slate-500`}>What you'll get</p>
                            <div className="list mt-4">
                                <p className={`flex gap-3 items-center mb-4 ${plan === "standard" ? "text-white" : "text-gray-700"}`}><HiBadgeCheck /> Professional Translator (1-3 years experience)</p>
                                <p className={`flex gap-3 items-center mb-4 ${plan === "standard" ? "text-white" : "text-gray-700"}`}><HiBadgeCheck /> Light Proofreading</p>
                            </div>
                            <div className="btn-cover flex justify-center items-center absolute bottom-8 left-[0] right-[0] ">
                                <div onClick={() => changePlanHandler("standard")} className={`btn py-2 rounded-md w-fit cursor-pointer ${plan === "standard" ? "bg-primary text-white shadow-xl shadow-primary px-12" : "bg-red-100 text-primary px-8"}`}>{plan === "professional" ? "Chosen" : "choose"}</div>
                            </div>
                        </div>
                        {/* profession */}
                        <div className={`h-[50vh] relative plan-professional border border-gray-600 rounded-[1rem] transition-all duration-700 ease-in-out shadow-sm shadow-slate-300 p-6 ${plan === "professional" ? "bg-gray-800 scale-110 z-30" : "bg-white"}`}>
                            <h2 className={`text-2xl text-center capitalize font-bold  mb-4 ${plan === "professional" ? "text-white" : "text-gray-700"}`}>professional</h2>
                            <p className={`text-slate-500`}>What you'll get</p>
                            <div className="list mt-4">
                                <p className={`flex gap-3 items-center mb-4 ${plan === "professional" ? "text-white" : "text-gray-700"}`}><HiBadgeCheck /> Expert Translator (3-5 years experience)</p>
                                <p className={`flex gap-3 items-center mb-4 ${plan === "professional" ? "text-white" : "text-gray-700"}`}><HiBadgeCheck /> 100+ Delivered Jobs with 95% customer satisfaction</p>
                                <p className={`flex gap-3 items-center mb-4 ${plan === "professional" ? "text-white" : "text-gray-700"}`}><HiBadgeCheck /> Detailed Proofreading</p>
                            </div>
                            <div className="btn-cover flex justify-center items-center absolute bottom-8 left-[0] right-[0] ">
                                <div onClick={() => changePlanHandler("professional")} className={`btn py-2 rounded-md w-fit cursor-pointer ${plan === "professional" ? "bg-primary text-white shadow-xl shadow-primary px-12" : "bg-red-100 text-primary px-8"}`}>{plan === "professional" ? "Chosen" : "choose"}</div>
                            </div>
                        </div>
                        {/* premium */}
                        <div className={`h-[50vh] relative plan-premium border border-gray-600 rounded-[1rem] transition-all duration-700 ease-in-out shadow-sm shadow-slate-300 p-6 ${plan === "premium" ? "bg-gray-800 scale-110 z-30" : "bg-white"}`}>
                            <h2 className={`text-2xl text-center capitalize font-bold  mb-4 ${plan === "premium" ? "text-white" : "text-gray-700"}`}>premium</h2>
                            <p className={`text-slate-500`}>What you'll get</p>
                            <div className="list mt-4">
                                <p className={`flex gap-3 items-center mb-4 ${plan === "premium" ? "text-white" : "text-gray-700"}`}><HiBadgeCheck /> Edit up to 4,000 hours</p>
                                <p className={`flex gap-3 items-center mb-4 ${plan === "premium" ? "text-white" : "text-gray-700"}`}><HiBadgeCheck /> Light Proofreading</p>
                            </div>
                            <div className="btn-cover flex justify-center items-center absolute bottom-8 left-[0] right-[0] ">
                                <div onClick={() => changePlanHandler("premium")} className={`btn py-2 rounded-md w-fit cursor-pointer ${plan === "premium" ? "bg-primary text-white shadow-xl shadow-primary px-12" : "bg-red-100 text-primary px-8"}`}>{plan === "professional" ? "Chosen" : "choose"}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-summary m-4"></div>
            </div>
        </>
    )
}

export default Order