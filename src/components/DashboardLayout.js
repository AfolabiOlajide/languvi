import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className='flex'>
            <div className="dashboard-menu flex flex-col gap-y-12 p-12 bg-primaryDark min-h-screen ">
                <NavLink to="/dashboard">
                    <div className="link-item">Dashboard</div>
                </NavLink>
                <NavLink to="/dashboard/personal-details">
                    <div className="link-item">Personal Details</div>
                </NavLink>
                <NavLink to="/dashboard/services">
                    <div className="link-item">Services</div>
                </NavLink>
                <NavLink to="/dashboard/documents">
                    <div className="link-item">Documents</div>
                </NavLink>
                <NavLink to="/dashboard/settings">
                    <div className="link-item">Settings</div>
                </NavLink>
            </div>
            <div className="view">
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardLayout