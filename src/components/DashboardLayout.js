import React, { useState } from 'react';
import moment from 'moment/moment';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FiLogOut } from "react-icons/fi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md"
import MenuDesign from "../assets/menu-design-img.png";

const DashboardLayout = () => {
    const [menuToggled, setMenuToggled] = useState(false);
    const date = moment().format("Do MMMM YYYY");

    const menuToggledHandler = () => {
        setMenuToggled(!menuToggled);
    }

    return (
        <div className='lg:grid lg:grid-cols-[20%_80%]'>
            <div className={`fixed top-0 ${menuToggled ? "left-0 max-w-[80%]" : "-left-[110%]"} duration-300 ease-in transition-all z-50 lg:relative lg:left-0 lg:w-[100%] dashboard-menu py-6 px-4 bg-white min-h-screen min-w-[20%] border-r-2 border-slate-100 `}>
                <div className="menu-header flex flex-row gap-4">
                    <div className="img">
                        <div className="w-[4rem] h-[4rem] rounded-md bg-primary"></div>
                    </div>
                    <div className="name">
                        <h3 className='font-bold text-xl'>SpaceAg Sac</h3>
                        <p>change company</p>
                    </div>
                </div>
                <div className="menu-link flex flex-col gap-y-2">
                    <Link to="/client/dashboard" onClick={menuToggledHandler}>
                        <div className="link-item mt-6 font-bold text-primary rounded-md text-center border border-primaryLight p-3">Dashboard</div>
                    </Link>
                    <NavLink to="/client/dashboard/orders" className={({ isActive }) => isActive ? "menu-hover bg-primaryLight text-primaryDark px-4 py-3 rounded-md" : "menu-hover text-slate-400 px-4 py-3"} onClick={menuToggledHandler}>
                        <div className="link-item flex gap-x-4 items-center">My Orders</div>
                    </NavLink>
                    <NavLink to="/client/dashboard/offers" className={({ isActive }) => isActive ? "menu-hover bg-primaryLight text-primaryDark px-4 py-3 rounded-md" : "menu-hover text-slate-400 px-4 py-3"} onClick={menuToggledHandler}>
                        <div className="link-item flex gap-x-4 items-center">Offers</div>
                    </NavLink>
                    <NavLink to="/client/dashboard/revisions" className={({ isActive }) => isActive ? "menu-hover bg-primaryLight text-primaryDark px-4 py-3 rounded-md" : "menu-hover text-slate-400 px-4 py-3"} onClick={menuToggledHandler}>
                        <div className="link-item flex gap-x-4 items-center">Revisions</div>
                    </NavLink>
                    <NavLink to="/client/dashboard/contact-us" className={({ isActive }) => isActive ? "menu-hover bg-primaryLight text-primaryDark px-4 py-3 rounded-md" : "menu-hover text-slate-400 px-4 py-3"} onClick={menuToggledHandler}>
                        <div className="link-item flex gap-x-4 items-center">Contact Us</div>
                    </NavLink>
                    <NavLink to="/client/dashboard/settings" className={({ isActive }) => isActive ? "menu-hover bg-primaryLight text-primaryDark px-4 py-3 rounded-md" : "menu-hover text-slate-400 px-4 py-3"} onClick={menuToggledHandler}>
                        <div className="link-item flex gap-x-4 items-center">Settings</div>
                    </NavLink>
                </div>
                <div className="log-out mt-[5rem]">
                    <div className="cursor-pointer font-bold text-black rounded-md flex justify-between border-primaryLight p-3">Logout <FiLogOut /> </div>
                </div>
                <div className="menu-design relative bg-primaryLight flex flex-col gap-y-3 justify-center py-4 px-12 pt-[8rem] mt-[10rem] rounded-[2rem]">
                    <img src={MenuDesign} className="-mt-[5rem] absolute left-[50%] translate-x-[-50%] -top-[1rem]" alt="" />
                    <p className='font-bold text-center'>Get Professional Translation</p>
                    <button className='bg-black text-white rounded-full px-4 py-2 text-center'>Order Now</button>
                </div>                
            </div>
            <div className="view pb-12">
                <div className="dashboard-header p-6 bg-zinc-300 flex justify-between">
                    <div className="left flex flex-col gap-y-4">
                        <div className="logo">
                            <h1 className='text-primary text-xl font-bold md:text-4xl'>Languvi</h1>
                        </div>
                        <div className="tag bg-green-500 rounded-sm text-white text-[.7rem] text-center p-1">Client Admin</div>
                    </div>
                    <div className="right flex items-center gap-x-6">
                        <div className="date text-md font-bold">{date}</div>
                        <div className="toggle-menu">
                            {menuToggled ? <MdOutlineClose className='block cursor-pointer lg:hidden' onClick={menuToggledHandler} size={24} /> : <HiOutlineMenuAlt1 className='block cursor-pointer lg:hidden' onClick={menuToggledHandler} size={24} />}
                        </div>
                    </div>
                </div>
                <div className="outlet">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout